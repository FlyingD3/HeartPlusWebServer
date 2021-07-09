import React, { Component } from "react";

import "./Form.css";
import { PSW_VALIDATOR, EM } from "../../../../utils/Const";

class Form extends Component {
  handleSubmit(event) {
    const target = event.target;
    const email = target.email;
    const username = target.username;
    const password = target.password;
    const confirmPassword = target.confirmPassword;
    if (password.value !== confirmPassword.value) {
      alert("Passwords don't match");
    } else {
      // creates entity
      fetch("/user", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value
        })
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="su-form-cnt">
        <div className="su-frm-header">
          <h1>SIGN UP</h1>
          <div className="su-frm-profile">
            <span>PROFILE IMAGE:</span>
            <button className="btn-fancy">
              <span className="top-key"></span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
              Upload
            </button>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="su-input-cnt">
            <div className="su-frm-group">
              <input
                type="email"
                className="frm-field"
                placeholder="Email"
                name="email"
                id="email"
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
               // pattern={PSW_VALIDATOR}
                required
              />
              <label htmlFor="password" className="frm-label">
                Password
              </label>
              <div className="requirements">
                Your password must be at least 8 characters as well as contain
                at least one uppercase, one lowercase, one number, and one
                special character.
              </div>
            </div>

            <div className="su-frm-group">
              <input
                type="password"
                className="frm-field"
                placeholder="Confirm Password"
                name="confirmPassword"
                id="confirmPassword"
                required
              />
              <label htmlFor="confirmPassword" className="frm-label">
                Confirm password
              </label>
            </div>
            <div className="su-frm-submit">
              <button className="btn-fancy">
                <span className="top-key"></span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
                SIGN UP
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
