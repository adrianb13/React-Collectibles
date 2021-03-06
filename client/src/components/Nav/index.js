import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
  <div> 
    <nav className="navbar navbar-dark bg">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Collectibles Manager</Link>
        </div>
        
        <nav pullright="true">

          {props.loggedIn ? (
            <Link to="/">
              <button color="inherit" className="btn btn-dark" onClick={props.logout}>Logout</button>
            </Link>
          ) : (
            <div>
              <Link to="/register">
                <button color="inherit" className="btn btn-dark rmgn">Register</button>
              </Link>
              <Link to="/">
                <button color="inherit" className="btn btn-dark rmgn">Login</button>
              </Link>
              <button color="inherit" className="btn btn-dark"><a className="wht" href="https://adrianb13.github.io/Responsive-Portfolio/portfolio.html">More By Adrian</a></button>

            </div>
          )}
        </nav>
      </div>
    </nav>
  </div>  
  );
}

export default Nav;