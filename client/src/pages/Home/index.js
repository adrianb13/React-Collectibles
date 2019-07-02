import React from "react"; 
import { Redirect, Link } from "react-router-dom";

import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="back">
        {this.props.loggedIn ? (
          <Redirect to="/collection" />
        ) : (
        <div>
          <h1 className="center">Start Tracking Your Collection</h1>
          <div className="homeContainer">
            <h3 className="center">Please Sign In</h3>
            <form onChange={this.props.handleInputChange} onClick={this.props.handleInputChange}>
              <div className="row justify-content-center">
                <div className="col-sm-10">
                  <input type="text" className="form-control" name="email"></input>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              
              <div className="row justify-content-center">
                <div className="col-sm-10">
                  <input type="password" className="form-control" name="password" autoComplete="off"></input>
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="ctr">
                  <button type="submit" className="btn btn-success" onClick={this.props.getUser}>Login</button>
                  <Link to="/register"><button type="submit" className="btn btn-warning btnMarg">Register</button></Link>
                </div>
              </div>
            </form>
            <br></br>
          </div>
          <br></br>
        </div>
        )}
      </div>
    )
  }
}

export default Home;