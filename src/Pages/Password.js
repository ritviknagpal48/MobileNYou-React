import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const Password = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh', backgroundColor: '#f5f5f5'}}>
                    <RedNavbar navbar="Change Password"></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left">
                      <div style={{height:"5rem"}}>
                        <div class="row" style={{height:"100%"}}>
                            <div class="col-4" style={{display:"flex",padding:"none"}}>
                              <div class="customer-account-image">N</div>                              
                            </div>
                            <div class="col-5 customer-account-details" style={{marginLeft:"-3.5rem",marginRight:"3.5rem"}}>
                                <p style={{fontSize:"18px",marginTop:"0.3rem"}}>NEERAJ</p>
                                <p style={{fontSize:"14px"}}>nesh.28feb@gmail.com</p>
                                <p style={{fontSize:"14px"}}>+91-9123-4101-01</p>
                            </div>
                            <div class="col-3"> 
                            </div>
                        </div>
                      </div>
                      
                    </section>
                </div>
            </div>
        </Fragment>
    )
}