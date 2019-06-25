import React from "react";
import { Redirect } from "react-router-dom";
import "./Hello.css";
import API from "../../utils/API";

class Hello extends React.Component {
  state = {
    collectibles: [],
    name: "Vinylmation #1",
    type: "Toy",
    value: 15.00,
    serNum: "1",
    description: "Disney Vinylmation #1",
    userEmail: this.props.email 
  }

  componentDidMount() {
  }

  addCollectible = () => {
    API.addCollectible({
      name: this.state.name,
      type: this.state.type,
      value: this.state.value,
      serNum: this.state.serNum,
      description: this.state.description,
      UserId: this.props.id
    })
    .then(res => {
      console.log(res.data)
    })
  }

  render() {
    return (
      <div>
        {this.props.loggedIn ? (
          <div className="cenText">
            <h1>Hello <b>{this.props.firstName}</b></h1>
            <div>You're Logged In</div>
            <br></br>
            
            <div className="row justify-content-lg-center">
              <div className="col-lg-8">
                <table className="table table-sm table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Value</th>
                      <th scope="col">Serial Number</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.collection.map(collectible => (
                    <tr key={collectible.id}>
                      <td>{collectible.id}</td>
                      <td>{collectible.name}</td>
                      <td>{collectible.type}</td>
                      <td>{collectible.value}</td>
                      <td>{collectible.serNum}</td>
                      <td>{collectible.description}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    )
  }
}

export default Hello;