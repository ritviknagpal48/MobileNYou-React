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
        <h6 style={{ color: "gray", fontSize: "12px", margin: "3%" }}>SIGN IN WITH OTP</h6>
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
      <div className="strike-color" style={{textAlign:"center"}}>
        <h6 className="strike-through-text">or</h6>
      </div>
    </Fragment>
  );
};