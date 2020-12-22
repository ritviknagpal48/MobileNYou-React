import React, { Fragment } from 'react';

export const Login = () => {
  return (
    <Fragment>
      <i class='bx bx-arrow-back' style={{ fontSize: "27px", margin: "5%" }}></i>
      <div class="container" style={{
        textAlign: "center",
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "Center",
        flexDirection: "column",
      }}>
        <img src="image/header/logo.gif" alt="Logo" classname="img-fluid"></img>
      </div>
      <div style={{ textAlign: "center" }}>
        <h6 style={{ color: "gray", fontSize: "12px", margin: "3%" }}>LOGIN</h6>
        <h6 style={{ fontSize: "12px", margin: "3%" }}>You're Just One Step Away From Signing Up</h6>
      </div>
      <div class="container" style={{ backgroundColor: "transparent", padding: "12px" }}>
        <div class="row" style={{ padding: "10px;" }}>
          <div class="col-6">
            <button type="button" class="btn btn-light" style={{ backgroundColor: "white", fontSize: "16px", width: "10rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", border: "solid lightgray 0.5px" }}><i style={{ float: "left", color: "blue", fontSize: "24px" }} class='bx bxl-facebook-circle' ></i>Facebook</button>
          </div>
          <div class="col-6">
            <button type="button" class="btn btn-light" style={{ backgroundColor: "white", fontSize: "16px", width: "10rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", border: "solid lightgray 0.5px" }}><i style={{ float: "left", color: "red", fontSize: "24px" }} class='bx bxl-google'></i>Google</button>
          </div>
        </div>
      </div>
      <div className="strike-color" style={{ textAlign: "center" }}>
        <h6 className="strike-through-text">or</h6>
      </div>
      <div style={{marginLeft:"10px", marginRight:"10px"}}>
        <input className="form-control input-tag-for-focus" style={{ backgroundColor: "#F5F5F5", padding: "7% 3%", borderRadius: "5px", border: "none", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%" }} placeholder="Email / Contact No."></input>
        <div style={{marginTop: '15px'}}>
          <button className="btn btn-danger" style={{padding: "4% 3%", borderRadius: "5px", border: "none", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%"}}>Continue</button>
        </div>
      </div>
    </Fragment>
  );
};