import React, { Fragment } from 'react';

export const SignUp = () => {
  return (
    <Fragment>
      <div class="badydiv">
        <div class="universalDiv" style={{textAlign:"unset",height:"100vh"}}>
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
            <h6 style={{ color: "gray", fontSize: "12px", margin: "3%" }}>SIGN UP</h6>
            <h6 style={{ fontSize: "12px", margin: "3%" }}>You're Just One Step Away From Signing Up</h6>
          </div>
          <div class="container" style={{ backgroundColor: "transparent", padding: "12px" }}>
            <div class="row" style={{ padding: "10px;" }}>
              <div class="col-6" style={{ display: "flex", justifyContent: "center" }}>
                <button type="button" class="btn btn-light" style={{ backgroundColor: "white", fontSize: "16px", width: "10rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", border: "solid lightgray 0.5px" }}><i style={{ float: "left", color: "blue", fontSize: "24px" }} class='bx bxl-facebook-circle' ></i>Facebook</button>
              </div>
              <div class="col-6" style={{ display: "flex", justifyContent: "center" }}>
                <button type="button" class="btn btn-light" style={{ backgroundColor: "white", fontSize: "16px", width: "10rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", border: "solid lightgray 0.5px" }}><i style={{ float: "left", color: "red", fontSize: "24px" }} class='bx bxl-google'></i>Google</button>
              </div>
            </div>
          </div>
          <div className="strike-color" style={{ textAlign: "center", marginTop: "10px", marginBottom: "24px" }}>
            <h6 className="strike-through-text"><span style={{margin:'0 0.2rem'}}>or</span></h6>
          </div>
          <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            <input className="form-control input-tag-for-focus" style={{ backgroundColor: "#F5F5F5", padding: "7% 3%", borderRadius: "5px", border: "1px solid gainsboro", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", marginTop: '15px' }} placeholder="Full Name"></input>
            <input className="form-control input-tag-for-focus" style={{ backgroundColor: "#F5F5F5", padding: "7% 3%", borderRadius: "5px", border: "1px solid gainsboro", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", marginTop: '15px' }} type="number" id="phnumber" placeholder="Phone Number"></input>
            <input className="form-control input-tag-for-focus" style={{ backgroundColor: "#F5F5F5", padding: "7% 3%", borderRadius: "5px", border: "1px solid gainsboro", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", marginTop: '15px' }} placeholder="Email Id"></input>
            <input className="form-control input-tag-for-focus" style={{ backgroundColor: "#F5F5F5", padding: "7% 3%", borderRadius: "5px", border: "1px solid gainsboro", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", marginTop: '15px' }} type="password" id="input-pwd" placeholder="Password"></input>
            <div class="form-check" style={{ marginTop: '5px', fontSize: '14px' }}>
              <input class="form-check-input" type="checkbox" id="eye-password" value="" />
              <label> Show Password</label>
            </div>
            <div style={{ marginTop: '0' }}>
              <button className="btn" style={{ padding: "4% 3%", borderRadius: "5px", border: "none", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", backgroundColor: "#c2172e", color: "white" }}>Verify Your Phone Number</button>
              <div class="form-check" style={{ marginTop: '5px', fontSize: '12px' }}>
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label class="form-check-label" for="defaultCheck1" style={{margin: '0.2rem 0'}}>
                  By continuing, you agree to <span style={{ color: "red", fontSize: "12px" }}>Terms of Use</span> and <span style={{ color: "red", fontSize: "12px" }}>Privacy Policy</span>
                </label>
              </div>
            </div>
          </div>
          <div style={{ margin: "1.8rem 0",textAlign:"center" }}>
            <p style={{ fontSize: "15px" }}>Already have an account? <span style={{ color: "red", fontSize: "14px" }}>Sign In</span></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};