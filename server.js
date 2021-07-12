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


//utenti
app.get('/login/user',(req, res)  => {
          connection.query("SELECT uid as 'id', password FROM lime_users WHERE email ='"+req.query.mail+"'", function (error, rows) {
            if(error) res.send(error);
            else {
              res.send({token: createToken(req.query.mail),rows});
            }
        });  
  });

  

//user
    //inserisco un nuovo utente
    app.post('/user', (req,res) => {
      connection.query("INSERT INTO Users (email,password) VALUES('"+req.body.email+"','"+CryptoAES.encrypt(req.body.password,process.env.REACT_APP_SERVER_KEY).toString()+"')", function(error,rows){
        if(error) res.send(error);
        else res.send(rows);
      });
    });

   //aggiorno un nuovo utente esistente
   app.put('/user',authenticateJWT,(req,res) => {
    connection.query("UPDATE lime_participants SET firstname = '"+CryptoAES.encrypt(req.body.firstname,process.env.REACT_APP_SERVER_KEY).toString()+"',lastname = '"+CryptoAES.encrypt(req.body.lastname,process.env.REACT_APP_SERVER_KEY).toString()+"',email = '"+CryptoAES.encrypt(req.body.email,process.env.REACT_APP_SERVER_KEY).toString()+"',owner_uid = "+req.body.ownerId+",modified= '"+format(new Date(),'yyyy-MM-dd hh:mm:ss')+"' WHERE participant_id='"+req.body.pid+"'", function(error,rows){
      if(error) res.send(error);
      else res.send(rows);
    });
  });

   //ritorno un utente
   app.get('/user',authenticateJWT,(req,res) => {
    connection.query("Select a.participant_id,a.firstname, a.lastname, a.email, b.value as 'parentCode', c.value as 'group', d.value as 'birthDate', e.protocol as 'protId' from lime_participants a left join lime_participant_attribute b ON a.participant_id = b.participant_id left join lime_participant_attribute c ON a.participant_id = c.participant_id left join lime_participant_attribute d ON a.participant_id = d.participant_id left join orange_protocols_for_user e ON a.participant_id = e.participant_id where b.attribute_id = '"+process.env.REACT_APP_CODE_PARENT+"' AND c.attribute_id = '"+process.env.REACT_APP_GROUP+"' and d.attribute_id = '"+process.env.REACT_APP_BIRTH_DATE+"' and e.active = 1 and a.participant_id IN (SELECT participant_id FROM lime_participant_attribute WHERE attribute_id ='"+process.env.REACT_APP_CODE_CHILD+"' AND value = '"+req.query.code+"')", function(error,rows){
      if(error) res.send(error);
      else { 
        rows.forEach(element => {
          if(element.firstname!='') element.firstname = CryptoAES.decrypt(element.firstname,process.env.REACT_APP_SERVER_KEY).toString(CryptoJS.enc.Utf8);
          if(element.lastname!='') element.lastname = CryptoAES.decrypt(element.lastname,process.env.REACT_APP_SERVER_KEY).toString(CryptoJS.enc.Utf8);
          if(element.birthDate!='') element.birthDate = CryptoAES.decrypt(element.birthDate,process.env.REACT_APP_SERVER_KEY).toString(CryptoJS.enc.Utf8);
          if(element.email!='') element.email = CryptoAES.decrypt(element.email,process.env.REACT_APP_SERVER_KEY).toString(CryptoJS.enc.Utf8);
        }); 
        res.send(rows);
      
      }
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