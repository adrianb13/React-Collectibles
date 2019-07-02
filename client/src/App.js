import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Auth from "./utils/Auth";
import "./App.css";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Hello from "./pages/Hello";
import Details from "./pages/Details";
import NoMatch from "./pages/NoMatch/NoMatch";


class App extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPass: "",
    collection: [],
    loggedIn: false
  };

  componentDidMount() {
  }

// Pulls Existing User When Logging In
  getUser = () => {
    Auth.destroyToken();
    API.getUser({
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      this.setState({
        id: res.data.id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        password: ""
      })
      Auth.setToken(res.data.token);
      this.authenticated();
      this.userId();
    })
    .catch(err => {
      console.log(err)
      alert("This Is Not A Valid User. Please Register")
    });
  };


// Saves data from User Registration Form
  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  };

// Saves New User from Registration to MySQL
  createNewUser = () => {
    if (this.state.firstName === (null || "")) {
      alert("Please Enter Your First Name")
    } else if (this.state.lastName === (null || "")) {
      alert("Please Enter Your Last Name")
    } else if (this.state.email === (null || "")) {
      alert("Please Enter Your Email")
    } else if (this.state.password === (null || "") || this.state.password < 8) {
      alert("Please Enter A Password")
    } else if (this.state.confPass === (null || "") || this.state.confPass < 8) {
      alert("Please Confirm Your Password")
    } else if(this.state.password === this.state.confPass) {
      API.createUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        this.setState({
          id: res.data.data.id,
          firstName: res.data.data.firstName,
          lastName: res.data.data.lastName,
          email: res.data.data.email, 
          password: ""
        })
        Auth.setToken(res.data.token);
        this.authenticated();
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
    } else {
      alert("Passwords do not match!")
    }
  };

// Gets Associated Collection
  userId = () => {
    API.getId(this.state.id)
    .then(res => {
      this.setState({
        collection: res.data.Collectibles
      })
    })
    .catch(err => console.log(err))
  }

  authenticated = () => {
    if(Auth.isAuthenticated()){
      this.setState({
        loggedIn: true
      })
    }
  }

// Buttons Logic
// Handles Logout Button
  logout = event => {
    event.preventDefault();
    Auth.setToken();
    Auth.destroyToken();
    console.log(Auth.isAuthenticated())
    this.setState({
      loggedIn: false,
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Nav
            loggedIn={this.state.loggedIn}
            logout={this.logout}
          ></Nav>
          <Switch>
            <Route exact path="/" render={() => (
              <Home
                loggedIn={this.state.loggedIn}
                handleInputChange={this.handleInputChange}
                getUser={this.getUser}
              />)}
            />
            <Route exact path="/register" render={() => (
              <Register
                loggedIn={this.state.loggedIn}
                handleInputChange={this.handleInputChange}
                createNewUser={this.createNewUser}
              />)}
            />
            <Route exact path="/collection" render={() => (
              <Hello
                id={this.state.id}
                loggedIn={this.state.loggedIn}
                firstName={this.state.firstName}
                collection={this.state.collection}
                userId={this.userId}
              />)}
            />
            <Route exact path="/collectibles/:id" render={(props) => (
              <Details
                loggedIn={this.state.loggedIn}
                collection={this.state.collection}
                handleInputChange={this.handleInputChange}
                userId={this.userId}
                {...props}
              />)}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;