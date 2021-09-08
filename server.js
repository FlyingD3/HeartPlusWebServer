import path from 'path'
import express from 'express'
import mysql from 'mysql';
import pkg from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import CryptoAES from 'crypto-js/aes.js'
import CryptoJS from 'crypto-js'
import pk from "date-fns"
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import winston from 'winston'
const {format} = pk;
/* eslint eqeqeq: 0 */

dotenv.config();

//Log
winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});



const connection = mysql.createPool({
  host     : process.env.REACT_APP_HOST,
  user     : process.env.REACT_APP_USER,
  password : process.env.REACT_APP_PASSWORD,
  database : process.env.REACT_APP_DATABASE
});
const app = pkg();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(path.resolve(), 'build')))

app.get('/orange/*', function (_, res) { res.sendFile(path.join(path.resolve(), 'build/index.html'))});




app.listen(3001, () =>
 { console.log('Express server is running on localhost:3001')
  console.log(process.env.REACT_APP_HOST)
  console.log(process.env.REACT_APP_USER)
  console.log(process.env.REACT_APP_PASSWORD)
  console.log(process.env.REACT_APP_DATABASE)}
);

app.post('/send/email',async(req, res)  => {
let token = CryptoJS.AES.encrypt(JSON.stringify({pwd:req.body.pwd, type:req.body.type,email:req.body.email,id:req.body.id,date: format(new Date(),'yyyy-MM-dd hh:mm:ss')}), process.env.REACT_APP_SERVER_KEY);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_GMAIL_USER, 
      pass: process.env.REACT_APP_GMAIL_PWD,
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Vela" <vela.orange@istitutomarino.it>', // sender address
    to: req.body.email, // list of receivers
    subject: "Recupero Password", // Subject line
    html: "Gentile utente, abbiamo ricevuto la tua richiesta per reimpostare la password, clicca il link qui di seguito per impostare una nuova password<br> <a href='https://vela.irib.cloud/orange/resetPassword/"+token.toString().replace(new RegExp("/", "g"),"abres")+"'>Reimposta password</a>.<br> Ignora questa email se non sei stato tu ad effettuare la richiesta", // plain text body
  });

  res.send("Message sent: %s"+ info.messageId);

});

function createToken (user) {
  return jwt.sign({
    data: user
  }, process.env.REACT_APP_SERVER_KEY, { expiresIn: '6h' });
}

//utenti
app.get('/login/user',(req, res)  => {
          connection.query("SELECT id_user, password FROM Users WHERE email ='"+req.query.mail+"' AND validated=1", function (error, rows) {
            if(error) res.send(error);
            else {
              res.send({token: createToken(req.query.mail),rows});
            }
        });  
  });

  

//user
    //inserisco un nuovo utente
    app.post('/user', (req,res) => {
      connection.query("INSERT INTO Users (email,password) VALUES('"+req.body.email+"','"+CryptoAES.encrypt(req.body.password,process.env.REACT_APP_SERVER_KEY).toString()+")", function(error,rows){
        if(error) res.send(error);
        else res.send(rows);
      });
    });

    //user
    //inserisco un nuovo utente
    app.post('/patient', (req,res) => {
      connection.query("INSERT INTO Patients (email,password,name,lastname,birthdate,created_by) VALUES('"+req.body.email+"','"+CryptoAES.encrypt("paziente",process.env.REACT_APP_SERVER_KEY).toString()+"','"+req.body.name+"','"+req.body.lastname+"','"+req.body.birthdate+"','"+req.body.createdby+"')", function(error,rows){
        if(error) res.send(error);
        else res.send(rows);
      });
    });

    app.post('/measurement', (req,res) => {
      req.body.measurements.forEach(item => {
        connection.query("INSERT INTO Measurements (id_patient,value,start_date,end_date,id_type) SELECT id_patient,'"+item.value+"','"+item.startDate+"','"+item.endDate+"','"+item.type+"' FROM Devices WHERE id_device = '"+item.device+"'", function(error,rows){
          if(error) res.send(error);
          else res.send(rows);
        });
      });
     
    });

  function authenticateJWT (req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader;
  
        jwt.verify(token, process.env.REACT_APP_SERVER_KEY, (err) => {
            if (err) {
                return res.sendStatus(403);
            }
            next();
        });
    } else {
        res.sendStatus(401);
    }
  };