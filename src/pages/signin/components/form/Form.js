import React, { Component } from "react";
import bcrypt from "bcryptjs";
import "./Form.css";
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

class Form extends Component {

  constructor(props){
    super(props);
    this.state = {redirect: false,error:false};
    
  }
  //gestisco il login
  handleSubmit = (e) => {
    e.preventDefault();

 fetch("/login/user?mail="+this.state.email)
 .then((response) => response.json()).then(users=>{if(users.rows.length == 1) {if(this.verifyPassword(this.state.password,users.rows[0].password)) this.setLogin(users.token,users.rows[0].id_user); else {this.setState({error:"password non corretta"})}} else {this.setState({error:"utente non esistente"})}}

 );
   }

   verifyPassword = (password,passwordHashed) => {
    if(bcrypt.compareSync(password,passwordHashed))
      return true;
      else return false;
  }

  setLogin = (token,id) => {
    sessionStorage.setItem('token', token);
      sessionStorage.setItem('loggedIN', true);
      sessionStorage.setItem('id', id);
      this.setState({redirect:true})
     }

     handleInputChange = (event) => {
      const target = event.target;
      const value = target.value
      const name = target.name;
      this.setState({
        [name]: value,
      });
    }

  render() {
    const { redirect,error } = this.state;

     if (redirect) {
       return <Redirect to='/browser'/>;
     }
    return (
      <div className="su-form-cnt">
        <div className="su-frm-header">
          <h1>LOGIN </h1>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="su-input-cnt">
            <div className="su-frm-group">
              <input
                type="email"
                className="frm-field"
                placeholder="Email"
                name="email"
                id="email"
                onChange={this.handleInputChange}
                required
              />
              <label htmlFor="email" className="frm-label">
                Email
              </label>
            </div>
            <div className="su-frm-group">
              <input
                type="password"
                className="frm-field"
                placeholder="Password"
                name="password"
                id="password"
                onChange={this.handleInputChange}
                required
              />
              <label htmlFor="password" className="frm-label">
                Password
              </label>
            </div>
            <div className="su-frm-group">
              <Link to="/recover-psw">
                <a className= "psw-frg">Password dimenticata?</a>
              </Link>
            </div>
            <div className="su-frm-submit">
              <button className="btn-fancy">
                <span className="top-key"></span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
                SIGN IN
              </button>
            </div>
            <div>
          <p>{error}</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
