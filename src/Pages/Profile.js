import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const Profile = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh', backgroundColor: '#f5f5f5'}}>
                    <RedNavbar navbar="Profile"></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left">
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"7rem"}}>
                        <div class="customer-account-image" style={{height:"6rem",width:"6rem", padding:"1.5rem 2.3rem",fontSize:"34px"}}>N</div>
                        <span style={{ borderRadius: "50%",top: "7.2rem",backgroundColor: "white",position: "absolute",zIndex: "10",left: "13.2rem",height: "1.5rem",width: "1.5rem",border: "1px solid gainsboro",textAlign:"center"}}><i class='bx bx-edit' style={{color:"#c2172e"}}></i></span>                           
                    </div>
                    <div>
                        <label style={{fontSize:"11px",color:"#c2172e",marginLeft:"0.8rem"}} for="email-password-input-box">Full Name</label> 
                        <input className="form-control input-tag-for-focus" style={{ backgroundColor: "white", padding: "7% 3%", borderRadius: "5px", border: "1px solid gainsboro", width: "95%",margin:"0 auto"}} placeholder="Email / Contact No." id="email-password-input-box"></input>

                        <label style={{fontSize:"11px",color:"#c2172e",marginLeft:"0.8rem"}} for="email-password-input-box">Email ID</label> 
                        <input disabled className="form-control input-tag-for-focus" style={{ backgroundColor: "##F5F5F5", padding: "7% 3%", borderRadius: "5px", border: "1px solid gainsboro", width: "95%",margin:"0 auto"}} placeholder="nesh.28feb@gmail.com" id="email-password-input-box"></input>

                        <label style={{fontSize:"11px",color:"#c2172e",marginLeft:"0.8rem"}} for="email-password-input-box">Password</label> 
                        <input disabled className="form-control input-tag-for-focus" style={{ backgroundColor: "##F5F5F5", padding: "7% 3%", borderRadius: "5px", border: "1px solid gainsboro", width: "95%",margin:"0 auto"}} placeholder="**********" id="email-password-input-box"></input>
                    </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
