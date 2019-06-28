import React from "react";
import { Redirect, Link } from "react-router-dom";
import API from "../../utils/API";

import "./Details.css";

class Details extends React.Component {
  state = {
    collId: parseInt(this.props.match.params.id),
    coll: [],
    name: "",
    type: "",
    value: "",
    serNum: "",
    description: "",
    delete: false
  }

  componentDidMount() {
    this.collDetails();
  }

  collDetails = () => {
    let collDtl = this.props.collection.filter(item => this.state.collId === item.id)
    this.setState({
      coll: collDtl,
      name: collDtl[0].name,
      type: collDtl[0].type,
      value: collDtl[0].value,
      serNum: collDtl[0].serNum,
      description: collDtl[0].description
    })
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  };

  updateColl = () => {
    API.updateCollectible({
      id: this.state.collId,
      name: this.state.name,
      type: this.state.type,
      value: this.state.value,
      serNum: this.state.serNum,
      description: this.state.description
    })
    .then(res => {
      this.props.userId();

      let update = [];
      update.push(JSON.parse(res.config.data));

      this.setState({
        coll: update
      })
    })
    .catch(err => {console.log(err)})
  }

  deleteForm = event => {
    event.preventDefault();
    if(this.state.delete === false) {
      this.setState({
        delete: true
      })
    } else if (this.state.delete === true) {
      this.setState({
        delete: false
      })
    }
  }

  deleteColl = () => {
    API.deleteCollectible(this.state.collId)
    .then(res => {
      console.log(res)
      this.props.userId();
      return <Redirect to="/collection" />
    })
  }

  render() {
    return (
      <div className="back">
        {this.props.loggedIn ? (
          <div>
            {this.state.coll.map(item => (
              <div key={item.id}>
                <h2>Collectible #{item.id} - {item.name}</h2>
                <div className="box" onChange={this.handleInputChange}>
                  <div className="row spc bdr">
                    <div className="col-md-6">
                      <div className="wid">Name:</div>
                      <div className="wid">{item.name}</div>
                      <div style={{clear:'both'}}></div>
                    </div>
                    <div className="col-md-6">
                      <input className="mgn wid2 inp" type="text" name="name" placeholder={item.name}></input>
                    </div>
                  </div>
                  <div className="row spc bdr">
                    <div className="col-md-6">
                      <div className="wid">Type:</div>
                      <div className="wid">{item.type}</div>
                      <div style={{clear:'both'}}></div>
                    </div>
                    <div className="col-md-6">
                      <input className="mgn wid2 inp" type="text" name="type" placeholder={item.type}></input>
                    </div>
                  </div>
                  <div className="row spc bdr">
                    <div className="col-md-6">
                      <div className="wid">Value:</div>
                      <div className="wid">${item.value}</div>
                      <div style={{clear:'both'}}></div>
                    </div>
                    <div className="col-md-6">
                      <input className="mgn wid2 inp" type="text" name="value" placeholder={item.value}></input>
                    </div>
                  </div>
                  <div className="row spc bdr">
                    <div className="col-md-6">
                      <div className="wid">Serial Number:</div>
                      <div className="wid">{item.serNum}</div>
                      <div style={{clear:'both'}}></div>
                    </div>
                    <div className="col-md-6">
                      <input className="mgn wid2 inp" type="text" name="serNum" placeholder={item.serNum}></input>
                    </div>
                  </div>
                  <div className="row spc bdr">
                    <div className="col-md-6">
                      <div className="wid">Description:</div>
                      <div className="wid">{item.description}</div>
                      <div style={{clear:'both'}}></div>
                    </div>
                    <div className="col-md-6">
                      <textarea className="mgn2 wid2" type="text" name="description" placeholder={item.description}></textarea>
                    </div>
                  </div>

                  {this.state.delete ? (
                    <div className="row spc">
                      <h4>ARE YOU SURE YOU WANT TO DELETE THIS COLLECTIBLE?</h4>
                      <div className="wid ctr">
                        <Link to="/collection"><button className="btn btn-danger" onClick={this.deleteColl}>Delete</button></Link>
                      </div>
                      <div className="wid ctr">
                        <button className="btn btn-warning" onClick={this.deleteForm}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <div className="row spc">
                      <div className="trd ctr">
                        <button className="btn btn-danger" onClick={this.deleteForm}>Delete</button>
                      </div>
                      <div className="trd ctr">
                        <Link to="/collection"><button className="btn btn-warning">Collection</button></Link>
                      </div>
                      <div className="trd ctr">
                        <button className="btn btn-success" onClick={this.updateColl}>Update</button>
                      </div>
                      <div style={{clear:'both'}}></div>
                    </div>
                  )} 
                  
                </div>
              </div>
            ))}
            <br></br>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    )
  }
}

export default Details;