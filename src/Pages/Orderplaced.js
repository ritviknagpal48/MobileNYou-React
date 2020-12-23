import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';

export const Orderplaced = () => {
    return (
        <Fragment>
            <div class="badydiv" style={{height:"100vh"}}>
                <div class="universalDiv" style={{ backgroundColor: "#F5F5F5",height:"100vh" }}>
                    <div class="container" style={{ backgroundColor: "#F5F5F5" }}></div>
                    <Navbar />
                    <section class="bodypanelmian">
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"1rem",backgroundColor:"white",boxShadow: "0px 0px 4px 1px gainsboro"}}>
                            <img src="/icons/tick.png" style={{width:"45%",height:"auto"}}></img>
                            <p style={{fontSize:"23px",fontWeight:"bolder",marginTop:"1rem"}}>Your Shipping Order</p>
                            <p style={{fontSize:"23px",fontWeight:"bolder"}}>Has Been Placed</p>
                            <p style={{fontSize:"12px"}}>Thank You For Order. We Are Processing Your Order</p>
                        </div>
                        <div class="sellerlocation" style={{backgroundColor:"white",height:"10rem",marginTop:"1rem",boxShadow: "0px 0px 4px 1px gainsboro"}}>
                            <p style={{fontSize:"14px",float:"left",margin:"0.2rem 0.7rem"}}>Delivery by Fri, Dec 4th 20</p>
                            <br></br>
                            <hr style={{ margin: '1% 0' }} />
                            <p style={{fontSize:"16px",fontWeight:"bold",float:"left",marginLeft:"0.7rem"}}>Neeraj Sharma</p>
                            <br></br>
                            <p style={{fontSize:"13px",float:"left",marginLeft:"0.7rem"}}>Rzg-261,Sitapuri-2, Street No. 13,</p>
                            <br></br>
                            <p style={{fontSize:"13px",float:"left",marginLeft:"0.7rem"}}>New Delhi, Delhi</p>
                            <br></br>
                            <p style={{fontSize:"13px",float:"left",marginLeft:"0.7rem"}}>110045</p>
                            <br></br>
                            <p style={{color:"#c2172e",fontSize:"20px",fontWeight:"bold"}}>View Details</p>
                        </div>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"50%"}}>
                            <button className="btn" style={{ padding: "4% 3%", border: "#c2172e solid 2px", borderRadius:"5px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "58%", backgroundColor: "white", color: "#c2172e",height:"2rem" }}><b><span style={{float:"left"}}>Continue Shopping</span> <i style={{fontSize:"24px",float:"left"}} class='bx bx-right-arrow-alt'></i></b></button>
                        </div>
                    </section>
                    

                </div>
            </div>
            
        </Fragment>
    );
};