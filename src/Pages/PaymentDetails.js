import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';

export const PaymentDetails = () => {
    return (

        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{backgroundColor: "transparent"}}>
                    <div class="container" style={{backgroundColor: "transparent"}}>
                        <Navbar></Navbar>
                        <div class="container" style={{backgroundColor: "transparent", padding: "12px"}}>
                        <div class="row" style={{padding: "10px;"}}>
                        <div class="col-6">
                            <button type="button" class="btn btn-light" style={{backgroundColor:"white", fontSize:"16px",width:"10rem",display: "flex",alignItems: "center",justifyContent:"center",flexDirection: "row"}}><i style={{float: "left", color: "blue", fontSize:"24px"}} class='bx bxl-facebook-circle' ></i>Facebook</button>
                        </div>
                        <div class="col-6">
                            <button type="button" class="btn btn-light" style={{backgroundColor:"white", fontSize:"16px",width:"10rem",display: "flex",alignItems:"center",justifyContent:"center",flexDirection: "row"}}><i style={{float: "left", color: "red", fontSize:"24px"}} class='bx bxl-google'></i>Google</button>
                        </div>
                        </div>
                    </div>
                    
                    <div class="container" style={{backgroundColor: "white",backgroundColor: "white",width:"93%",height:"2.5rem",borderRadius: "2%"}}>
                        <span style={{float:"left",margin:"0 1rem",padding:"0.5rem 0",fontSize: "15px"}}>View items in cart</span>
                        <i style={{float: "left" ,fontSize: "23px",padding:"0.5rem 0",marginLeft:"-0.7rem"}} class='bx bx-chevron-down'></i>
                        <span style={{float:"right",margin:"0 1rem",padding:"0.5rem 0",color:"red",fontSize: "15px"}}>₹5899</span>
                    </div>  
                    <div style={{backgroundColor: "rgba(255, 0, 0, 0.05)", border: "dotted red 1px", borderRadius: "5px", fontSize: "16px", margin: "4%",height:"2.5rem",padding:"0.3rem 0"}}>
                        Get <b style={{color: "rgba(167, 13, 13, 0.8)"}}>100Rs</b> Off on Prepaid Order
                    </div>        
                    <section class="bodypanelmian" style={{margin: "1%",display:"flex",alignItems: "center",justifyContent: "center",flexDirection: "column",backgroundColor: "white", marginBottom: "20%", paddingBtom: "10px"}}>
                        <p style={{
                          display:'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column'}}>Enter Your Shipping Address</p>
                        <input style={{border:"0.5px solid gainsboro", margin:"4% 2%", padding:"10px", width: "80%"}} type="number" name="Phone Number" placeholder="Phone No. *" />
                        <input style={{border:"0.5px solid gainsboro", margin:"4% 2%", padding:"10px", width: "80%"}} type="text" name="Email" placeholder="Email*" />
                        <input style={{border:"0.5px solid gainsboro", margin:"4% 2%", padding:"10px", width: "80%"}} type="text" name="Full Name" placeholder="Full Name*" />
                        <input style={{border:"0.5px solid gainsboro", margin:"4% 2%", padding:"10px", width: "80%"}} type="text" name="Full Address" placeholder="Full Address*" />
                        <input style={{border:"0.5px solid gainsboro", margin:"4% 2%", padding:"10px", width: "80%"}} type="number" name="Pincode" placeholder="Pincode*" />
                        <div class="container" style={{width:'80%'}}>
                        <div class="row">
                            <div class="col-6">
                                <input style={{border:"0.5px solid gainsboro", margin:"4% 2%", padding:"10px", width:"110%"}} type="text" name="Locality" placeholder="Locality*" />
                            </div>
                            <div class="col-6">
                                <input style={{border:"0.5px solid gainsboro", margin:"4% 2%", padding:"10px", width:"100%"}} type="text" name="City" placeholder="City*" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <input style={{border:"0.5px solid gainsboro", margin:"4% 2%", padding:"10px", width:"110%"}} type="text" name="State" placeholder="State*" />
                            </div>
                            <div class="col-6">
                                <input style={{
                                  border:'0.5px solid gainsboro',
                                  margin:'4% 2%', 
                                  padding:'10px', 
                                  width:'100%', 
                                  margin:'2%',
                                  padding:'10px'
                                }}
                                type="text" name="Landmark" placeholder="Landmark" />
                            </div>
                        </div>
                        </div>
                        <div style={{
                          float: 'left',
                          textAlign:'left'
                        }} class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">New Here? Create Password</label>
                        </div>
                        <input type="password" style={{
                          border:'0.5px solid gainsboro',
                          margin:'2%',
                          padding:'10px',
                          width: '80%'
                        }}
                          type="text" name="Password" placeholder="Password*" />
                    </section>
                    <div class="footer" style={{
                        position: 'fixed',
                        bottom: '0',
                        width: '100%',
                        backgroundColor: '#ffffff',
                        height:'4.5rem',
                        display:'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        boxShadow: '4px -5px 6px rgba(207, 207, 207, 0.5)'
                    }}>
                        <div class="container">
                        <div class="row">
                            <div class="col-6">
                            <div style={{
                              float:'left', 
                              margin: '0 1rem'
                            }}>
                                <p style={{margin:'0 -0.3rem'}}>Total</p>
                                <p style={{color: 'red'}}>₹5899</p>
                            </div>
                            </div>
                            <div class="col-6">
                            <button type="button" class="btn btn-danger" style={{
                              float:'right', 
                              margin:'0 2rem'
                            }}>
                              Continue
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
  );
};