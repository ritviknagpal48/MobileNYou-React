import React, { Fragment } from 'react';

export const Login = () => {
  return (
    <Fragment>
      <i class='bx bx-arrow-back' style={{fontSize:"27px", margin:"5%"}}></i>
      <div class="container" style={{
        textAlign: "center",
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "Center",
        flexDirection: "column",
      }}>
        <img src="image/header/logo.gif" alt="Logo" classname="img-fluid"></img>
        <p style={{marginTop:"0.3rem",fontSize:"15px"}}>SIGN IN WITH OTP</p>
        <p style={{marginTop:"1rem !important",fontSize:"12px"}}>You're Just One Step Away From Signing In</p>
        <div class="row" style={{padding: "10px;",margin:"1rem 0"}}>
            <div class="col-6" style={{marginLeft:"1rem"}}>
                <button type="button" class="btn btn-light" style={{backgroundColor:"white", fontSize:"16px",width:"10rem",display: "flex",alignItems: "center",justifyContent:"center",flexDirection: "row",border:"1px solid gainsboro"}}><i style={{float: "left", color: "blue", fontSize:"24px"}} class='bx bxl-facebook-circle' ></i>Facebook</button>
            </div>
            <div class="col-6" style={{marginLeft:"-1rem"}}>
                <button type="button" class="btn btn-light" style={{backgroundColor:"white", fontSize:"16px",width:"10rem",display: "flex",alignItems:"center",justifyContent:"center",flexDirection: "row",border:"1px solid gainsboro"}}><i style={{float: "left", color: "red", fontSize:"24px"}} class='bx bxl-google'></i>Google</button>
            </div>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
            <hr style={{width:"3rem",color:"red",float:"left",backgroundColor:"red",marginRight:"0.1rem"}}></hr><span style={{float:"left",color:"red",fontSize:"20px"}}>or</span><hr style={{width:"3rem",color:"red",float:"left",backgroundColor:"red",marginLeft:"0.1rem"}}></hr>
        </div>
      </div>
    </Fragment>
  );
};