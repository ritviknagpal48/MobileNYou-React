import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const SupportCenter = () => {

    function Expand(e){
        e.target.style.display="none";
        document.getElementById("expand-issue-list").style.display="block"
    }

    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh',backgroundColor:"#F5F5F5"}}>
                    <RedNavbar navbar="Support Center"></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left">
                     <div class="sellerlocation" style={{backgroundColor:"white"}}>
                            <div class="row">
                                <div className="col-3">
                                    <img src='/image/RealmeX50Pro.jpg' className='img-fluid' alt='img1' />
                                </div>
                                <div className="col-9" style={{textAlign: 'left'}}>
                                    <p style={{lineHeight:"1rem",marginBottom:"0.4rem"}}>Realme X50 Pro 5G (Rust Red, 256GB)<br></br> (12GB RAM)</p>
                                    <p><span style={{float:"left"}}><i className='fas fa-rupee-sign' /> 599</span></p>
                                </div>
                            </div>
                        </div>
                    <div class="sellerlocation" style={{backgroundColor:"white"}}>
                             <p style={{ color: 'grey',fontSize:"13px"}}>
                                PLEASE SELECT AN ISSUE
                            </p>
                            <hr style={{ margin: '1% 0' }} />
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>I want to know the status of my order</p>
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>My order is delayed</p>
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>I want my order to be delivered at a specific date/time</p>
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>I paid for my order but my order status shows payment not recieved</p>
                            <p onClick={Expand} style={{color:"#c2172e",textAlign:"center",fontSize:"16px",cursor:"pointer"}}>View All</p>
                            <div id="expand-issue-list" style={{display:"none"}}>
                                <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>I paid for my order but my order status shows payment not recieved</p>
                                <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>I paid for my order but my order status shows payment not recieved</p>
                                <p style={{margin:"1rem 0 0 0",fontSize:"13px",cursor:"pointer"}}>Other</p>
                            </div>
                        </div>
                        <div className="submit-button" style={{position:"relative", display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column", top: '0rem !important'}}>
                            <button type="button" class="btn btn-danger" style={{backgroundColor:" #c2172e",width:"92%", marginBottom: '2rem'}}>Save Changes</button>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}