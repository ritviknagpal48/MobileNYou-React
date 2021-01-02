import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const CancellationConfirmed = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv">
                    <RedNavbar navbar="Request Cancellation"></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left">
                        <div class="sellerlocation" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"1rem",backgroundColor:"white",boxShadow: "0px 0px 4px 1px gainsboro"}}>
                            <img src="/icons/tick.png" style={{width:"45%",height:"auto",marginTop:"1rem"}}></img>
                            <p style={{fontSize:"23px",fontWeight:"bolder",marginTop:"1rem"}}>Cancellation Confirmed</p>
                            <p style={{fontSize:"12px",color:"#c2172e",margin:"0.3rem 0 1rem 0"}}>View Status</p>
                        </div>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"24rem"}}>
                            <button className="btn" style={{ padding: "4% 3%", border: "#c2172e solid 2px", borderRadius:"5px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "58%", backgroundColor: "white", color: "#c2172e",height:"2rem" }}><b><span style={{float:"left"}}>Continue Shopping</span> <i style={{fontSize:"24px",float:"left"}} class='bx bx-right-arrow-alt'></i></b></button>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}