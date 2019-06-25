import React from "react"; 
import { Redirect, Link } from "react-router-dom";

import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        {this.props.loggedIn ? (
          <Redirect to="/collection" />
        ) : (
        <div>
          <h1 className="center">Welcome!</h1>
          <h3 className="center">Please Sign In</h3>
          <div className="homeContainer">
            <form onChange={this.props.handleInputChange} onClick={this.props.handleInputChange}>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <input type="text" className="form-control" name="email"></input>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <br></br>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <input type="password" className="form-control" name="password" autoComplete="off"></input>
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-md-1 offset-md-3">
                  <button type="submit" className="btn btn-success" onClick={this.props.getUser}>Login</button>
                </div>
                <div className="col-md-1">
                  <Link to="/register"><button type="submit" className="btn btn-warning btnMarg">Register</button></Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default Home;