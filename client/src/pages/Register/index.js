import React from 'react';
import { Redirect, Link } from "react-router-dom";

function Register(props) {
  return (
    <div>
      {props.loggedIn ? (
        <Redirect to="/hello" />
      ) : (
        <div>
          <h2 className="center">Create Account</h2>
          <form onChange={props.handleInputChange} onClick={props.handleInputChange}>
            <div className="form-group">
              <div className="row">
                <div className="col-md-3 offset-md-3">
                  <input type="text" className="form-control" id="firstName" placeholder="First Name" name="firstName" />    
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" id="lastName" placeholder="Last Name" name="lastName" />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
              <div className="row topMar">
                <div className="col-md-6 offset-md-3">
                  <input type="text" className="form-control" id="email" placeholder="Email" name="email" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row topMar">
                <div className="col-md-6 offset-md-3">
                  <input type="password" className="form-control" id="password" name="password" autoComplete="off" />
                  <label htmlFor="password">Password (Min: 8 Characters)</label>
                </div>
              </div>
              <div className="row topMar">
                <div className="col-md-6 offset-md-3">
                  <input type="password" className="form-control" id="confPass" name="confPass" autoComplete="off" />
                  <label htmlFor="confPass">Confirm Password</label>
                </div>
              </div>
              <div className="row topMar">
                <div className="col-md-1 offset-md-3">
                  <button className="btn btn-success" onClick={props.createNewUser}>Register</button>
                </div>
                <div className="col-md-1">
                  <Link to="/"><button className="btn btn-warning btnMarg">Cancel</button></Link>
                </div>
              </div>
            </div>
          </form>    
        </div>
      )}
    </div>
  )
}

export default Register;