import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const CancellationConfirmed = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh'}}>
                    <RedNavbar navbar="Request Cancellation"></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left">
                        <div class="sellerlocation" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"1rem",backgroundColor:"white",boxShadow: "0px 0px 4px 1px gainsboro"}}>
                            <img src="/icons/tick.png" style={{width:"45%",height:"auto",marginTop:"1rem"}}></img>
                            <p style={{fontSize:"23px",fontWeight:"bolder",marginTop:"1rem"}}>Cancellation Confirmed</p>
                            <p style={{fontSize:"12px",color:"#c2172e",margin:"0.3rem 0 1rem 0"}}>View Status</p>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}