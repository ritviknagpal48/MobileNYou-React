import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';

export const ReferAFriendDetails = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{ backgroundColor: "#F5F5F5" }}>
                    <Navbar />
                    <section class="bodypanelmian aboutseller text-left"> 
                      <img src='/image/Refer/ReferAFriend-Details.png' width="100%" />
                        <div className="sellerlocation" style={{backgroundColor:"white", borderTopLeftRadius: '100% 30px', borderTopRightRadius: '100% 30px'}}>




                        <p style={{fontSize:"11px"}}>Share Your Referal Link and Invite Your Friends and Get</p>
                        <p style={{fontSize:"22px",fontWeight:"bold",color:"#c2172e",marginBottom:"0rem"}}> &#8377;500</p>
                        <span style={{color:"white",backgroundColor:"#0080FF",fontSize:"18px",padding:"0.5rem 2.5rem"}}>B276HJ</span>
                        <br></br>
                        <button type="button" class="btn btn-outline-primary" style={{marginTop:"-0.5rem",borderRadius:"1.4rem",width:"6.5rem",fontSize:"12px",padding:"0.2rem",marginBottom:"0.5rem"}} onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>Tap to copy</button>
                        <p style={{marginBottom:"0.5rem"}}>Share Your Personal Invite Code Via</p>
                        <div class="row" style={{width:"50%",marginLeft:"-2.4rem"}}>
                            <div class="col-3">
                                <i class='bx bxl-whatsapp' style={{backgroundColor:"#4DC45A",color:"white",fontSize:"28px",borderRadius:"50%",padding:"0.1rem",marginRight:"-1.6rem"}}></i>
                            </div>
                            <div class="col-3">
                                <i class='bx bxl-facebook-circle' style={{fontSize:"36px",color:"#38529A",position:"relative",top:"-0.15rem"}} ></i>
                            </div>
                            <div class="col-3">
                                <i class='bx bxl-twitter' style={{backgroundColor:"#07A4F0",color:"white",fontSize:"18px",borderRadius:"50%",padding:"0.4rem",marginRight:"-1.2rem"}}></i>
                            </div>
                            <div class="col-3">
                                <i class='bx bxs-share-alt' style={{backgroundColor:"#c2172e",color:"white",fontSize:"18px",borderRadius:"50%",padding:"0.4rem"}}></i>
                            </div>
                        </div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
