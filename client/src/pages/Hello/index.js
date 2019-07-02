import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./Hello.css";
import API from "../../utils/API";

import AddColl from "../../components/AddColl";

class Hello extends React.Component {
  state = {
    UserId: this.props.id,
    collectibles: [],
    name: "",
    type: "",
    value: null,
    serNum: "",
    description: "",
    add: false
  }

  componentDidMount() {
//    this.addCollectible();
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  };

  addCollectible = () => {
    API.addCollectible({
      name: this.state.name,
      type: this.state.type,
      value: this.state.value,
      serNum: this.state.serNum,
      description: this.state.description,
      UserId: this.state.UserId
    })
    .then(res => {
      this.props.userId()
      alert("Your Collectible Has Been Added!")
      this.setState({
        name: "",
        type: "",
        value: "",
        serNum: "",
        description: "",
        add: false
      })
    })
  }

  addForm = (event) => {
    event.preventDefault();
    if(this.state.add === false) {
      this.setState({
        add: true
      })
    } else if (this.state.add === true) {
      this.setState({
        add: false
      })
    }
  }

  render() {
    return (
      <div className="back">
        {this.props.loggedIn ? (
          <div className="cenText">
            <h1>Hello <b>{this.props.firstName}</b></h1>
            <h3>Welcome To Your Collection</h3>
            <br></br>
            
            <div className="row justify-content-sm-center">
              <div className="col-sm-11">
                <table className="table table-sm table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Value</th>
                      <th scope="col">Serial Number</th>
                      <th scope="col">Description</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.collection.map(collectible => (
                    <tr key={collectible.id}>
                      <td>{collectible.id}</td>
                      <td>{collectible.name}</td>
                      <td>{collectible.type}</td>
                      <td>${collectible.value}</td>
                      <td>{collectible.serNum}</td>
                      <td>{collectible.description}</td>
                      <td><Link to={"/collectibles/" + collectible.id}>Details</Link></td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>

            </div>

            <div>
              {this.state.add ? (
                <AddColl
                  handleInputChange={this.handleInputChange}
                  addCollectible={this.addCollectible}
                  addForm={this.addForm}
                >
                </AddColl>
              ) : (
                <div>
                  <button className="lmgn btn btn-primary" onClick={this.addForm}>Add Collectible</button>
                </div>
              )}
            </div>
            <br></br>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    )
  }
}

export default Hello;