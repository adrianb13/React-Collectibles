import React from "react";
import "./AddColl.css";

function AddColl (props) {
  return (
    <div>
      <h2>Add To Your Collection</h2>
      <div className="box2" onChange={props.handleInputChange}>
        <div className="row spc bdr2">
          <div className="col-md-6">
            <div className="wid3">Name:</div>
          </div>
          <div className="col-md-6">
            <input className="mgn wid2 inp" type="text" name="name" placeholder="Kobe Bryant Signed Jersey"></input>
          </div>
        </div>
        <div className="row spc bdr2">
          <div className="col-md-6">
            <div className="wid3">Type:</div>
          </div>
          <div className="col-md-6">
            <input className="mgn wid2 inp" type="text" name="type" placeholder="Sports Jersey"></input>
          </div>
        </div>
        <div className="row spc bdr2">
          <div className="col-md-6">
            <div className="wid3">Value: ($)</div>
          </div>
          <div className="col-md-6">
            <input className="mgn wid2 inp" type="text" name="value" placeholder="1000"></input>
          </div>
        </div>
        <div className="row spc bdr2">
          <div className="col-md-6">
            <div className="wid3">Serial Number: (Optional)</div>
          </div>
          <div className="col-md-6">
            <input className="mgn wid2 inp" type="text" name="serNum" placeholder="#24"></input>
          </div>
        </div>
        <div className="row spc">
          <div className="col-md-6">
            <div className="wid3">Description:</div>
          </div>
          <div className="col-md-6">
            <textarea className="mgn wid2" type="text" name="description" placeholder="Signed Kobe Bryant Jersey #24"></textarea>
          </div>
        </div>
        <button className="btn btn-success btnw" onClick={props.addCollectible}>Add To Collection</button>
        <button className="btn btn-warning btnw2" onClick={props.addForm}>Cancel</button>
      </div>
    </div>
  )
}

export default AddColl;