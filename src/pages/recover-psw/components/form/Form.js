import React, { Component } from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";

import "./Form.css";

const Form = () => {
  const history = useHistory();
  let emailValidator = false

  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      emailValidator = true
    } else {
      emailValidator = false
    }
  };

  const redirectMe = () => {
    if (emailValidator) {
      history.push("/recovered");
    }
  };

  return (
    <>
      <div className="su-form-cnt">
        <div className="su-frm-header">
          <h1>RECUPERA PASSWORD </h1>
        </div>

        <form>
          <div className="su-input-cnt">
            <div className="su-frm-group">
              <p>Inserisci l'e-mail per recuperare il tuo account.</p>
            </div>
            <div className="su-frm-group">
              <input
                type="email"
                className="frm-field"
                placeholder="Email"
                name="email"
                id="email"
                onChange={(e) => validateEmail(e)}
                required
              />
              <label htmlFor="email" className="frm-label">
                Email
              </label>
            </div>
            <div className="su-frm-submit" onClick={() => redirectMe()}>
              <button className="btn-fancy" >
                <span className="top-key"></span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
                Recupera Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
