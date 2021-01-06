import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';

export const ReferAFriend = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{ backgroundColor: "#F5F5F5" }}>
                    <Navbar />
                    <section class="bodypanelmian aboutseller">
                        <img src="/image/Refer/ReferAFriend.png" style={{height:"auto",width:"100%",zIndex:"1"}}></img>
                        <div className="sellerlocation" style={{backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",zIndex:"5",position:"relative",top:"-10rem"}}>
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
                                    <i class='bx bxl-twitter' style={{backgroundColor:"#41B7E8",color:"white",fontSize:"18px",borderRadius:"50%",padding:"0.4rem",marginRight:"-1.2rem"}}></i>
                                </div>
                                <div class="col-3">
                                    <i class='bx bxs-share-alt' style={{backgroundColor:"#c2172e",color:"white",fontSize:"18px",borderRadius:"50%",padding:"0.4rem"}}></i>
                                </div>
                            </div>
                        </div>
                        <div class="sellerlocation" style={{border:"none",boxShadow:"none",borderRadius:"0.5rem",backgroundImage:"linear-gradient(#30A8DF,#185470)",backgroundRepeat:"no-repeat",height:"16rem",padding:"0",position:"relative",top:"-10rem"}}>
                            <div class="row" style={{zIndex:"5"}}>
                                <div class="col-4" style={{zIndex:"5"}}>
                                    <div class="row" style={{margin:"auto",justifyContent:"center"}}>
                                        <img src="/image/Refer/WhiteCircle.png"></img>
                                    </div>
                                    <div class="row" style={{margin:"auto",justifyContent:"center"}}>
                                    <p style={{color:"white",fontSize:"14px",fontWeight:"50"}}>Step 1</p>
                                        <p style={{color:"white",lineHeight:"0.9rem",fontSize:"10px",fontWeight:"50"}}>Lorem ipsum dolor amet, consetetur sadipscing elitr </p>
                                    </div>
                                </div>
                                <div class="col-4" style={{zIndex:"5"}}>
                                    <div class="row" style={{margin:"auto",justifyContent:"center"}}>
                                        <img src="/image/Refer/WhiteCircle.png"></img>
                                    </div>
                                    <div class="row" style={{margin:"auto",justifyContent:"center"}}>
                                        <p style={{color:"white",fontSize:"14px",fontWeight:"50"}}>Step 2</p>
                                        <p style={{color:"white",lineHeight:"0.9rem",fontSize:"10px",fontWeight:"50"}}>Lorem ipsum dolor amet, consetetur sadipscing elitr</p>
                                    </div>
                                </div>
                                <div class="col-4" style={{zIndex:"5"}}>
                                    <div class="row" style={{margin:"auto",justifyContent:"center"}}>
                                    <img src="/image/Refer/WhiteCircle.png"></img>
                                    </div>
                                    <div class="row" style={{margin:"auto",justifyContent:"center"}}>
                                    <p style={{color:"white",fontSize:"14px",fontWeight:"50"}}>Step 3</p>
                                        <p style={{color:"white",lineHeight:"0.9rem",fontSize:"10px",fontWeight:"50"}}>Lorem ipsum dolor amet, consetetur sadipscing elitr </p>
                                    </div>
                                </div>
                            </div>
                            <img src="/image/Refer/BlueDotted.png" style={{width:"80%",margin:"auto",position:"relative",top:"-8.2rem",zIndex:"2",height:"2px"}}></img>
                            <button style={{color:"#30A8DF",backgroundColor:"white",fontSize:"10px",borderRadius:"2rem",border:"none",padding:"0.4rem 0.8rem",marginTop:"0.5rem"}}>Read Terms and Condition *</button>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
