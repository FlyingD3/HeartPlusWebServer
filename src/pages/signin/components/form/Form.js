import React, { Component } from "react";

import "./Form.css";

class Form extends Component {
  render() {
    return (
      <div className="su-form-cnt">
        <div className="su-frm-header">
          <h1>LOGIN </h1>
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
                required
              />
              <label htmlFor="password" className="frm-label">
                Password
              </label>
            </div>
            <div className="su-frm-submit">
              <button className="btn-fancy">
                <span className="top-key"></span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
                SIGN IN
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
