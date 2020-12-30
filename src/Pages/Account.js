import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const Account = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" >
                    <RedNavbar></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left" >
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
                                    <button type="button" class="btn btn-outline-danger" style={{margin:"1rem 0",borderColor:"#c2172e",color:"#c2172e",padding:"0.4rem 1rem"}}>Edit</button>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div class="container">
                            <button class="transparent-btn">
                                <div class="row">
                                    <div class="col-2">
                                        <i class='bx bx-wallet' style={{color:'#c2172e', marginTop: '0.2rem'}} ></i>
                                    </div>
                                    <div class="col-8" style={{textAlign: 'left', paddingLeft: '0'}}>
                                        MNU Wallet
                                    </div>
                                    <div class="col-2" style={{paddingLeft: '0'}}>
                                        <span style={{color: 'green'}}> &#8377;500</span>
                                    </div>
                                </div>
                            </button>
                            <button class="transparent-btn">
                                <div class="row">
                                    <div class="col-2">
                                        <i class='bx bxl-dropbox' style={{color:'#c2172e', marginTop: '0.2rem', fontSize: '20px'}} ></i>
                                    </div>
                                    <div class="col-10" style={{textAlign: 'left', paddingLeft: '0'}}>
                                        Orders
                                    </div>
                                </div>
                            </button>
                            <button class="transparent-btn">
                                <div class="row">
                                    <div class="col-2">
                                        <i class='bx bx-heart' style={{color:'#c2172e', marginTop: '0.2rem', fontSize: '20px'}} ></i>
                                    </div>
                                    <div class="col-10" style={{textAlign: 'left', paddingLeft: '0'}}>
                                        Wishlist
                                    </div>
                                </div>
                            </button>
                            <button class="transparent-btn">
                                <div class="row">
                                    <div class="col-2">
                                        <i class='bx bx-support' style={{color:'#c2172e', marginTop: '0.2rem', fontSize: '20px'}} ></i>
                                    </div>
                                    <div class="col-10" style={{textAlign: 'left', paddingLeft: '0'}}>
                                        Support Center
                                    </div>
                                </div>
                            </button>
                            <button class="transparent-btn">
                                <div class="row">
                                    <div class="col-2">
                                        <i class='bx bxs-edit-location' style={{color:'#c2172e', marginTop: '0.2rem', fontSize: '20px'}} ></i>
                                    </div>
                                    <div class="col-10" style={{textAlign: 'left', paddingLeft: '0'}}>
                                        Saved Address
                                    </div>
                                </div>
                            </button>
                            <button class="transparent-btn">
                                <div class="row">
                                    <div class="col-2">
                                        <i class='bx bxs-coupon' style={{color:'#c2172e', marginTop: '0.2rem', fontSize: '20px'}} ></i>
                                    </div>
                                    <div class="col-10" style={{textAlign: 'left', paddingLeft: '0'}}>
                                        Coupons
                                    </div>
                                </div>
                            </button>
                            <button class="transparent-btn">
                                <div class="row">
                                    <div class="col-2">
                                        <i class='bx bx-money' style={{color:'#c2172e', marginTop: '0.2rem', fontSize: '20px'}} ></i>
                                    </div>
                                    <div class="col-10" style={{textAlign: 'left', paddingLeft: '0'}}>
                                        Refer and Earn
                                    </div>
                                </div>
                            </button>
                            <button class="transparent-btn">
                                <div class="row">
                                    <div class="col-2">
                                        <i class='bx bx-log-out' style={{color:'#c2172e', marginTop: '0.2rem', fontSize: '20px'}} ></i>
                                    </div>
                                    <div class="col-10" style={{textAlign: 'left', paddingLeft: '0'}}>
                                        Logout
                                    </div>
                                </div>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}