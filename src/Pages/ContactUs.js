import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const ContactUs = () => {

    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh',backgroundColor:"#F5F5F5"}}>
                    <RedNavbar navbar="Contact Us"></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left">
                    <div class="sellerlocation" style={{backgroundColor:"white"}}>
                             <p style={{fontSize:"14px"}}>
                                MY RETURN WAS PICKED UP BUT I HAVEN'T RECIEVED MY REFUND YET 
                            </p>
                            <hr style={{ margin: '1% 0' }} />
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>Refund will be initiated after we recieve the item and it passes the quantity check.</p>
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>Refund time depends on the mode of refund</p>
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>Refund time depends on the mode of refund</p>
                            <p style={{margin:"1rem 0 0 0",fontSize:"13px",cursor:"pointer"}}>Bank Account</p>
                            <p style={{margin:"0 0 1rem 0",fontSize:"13px",cursor:"pointer"}}>Time the item takes to reach us +1 to 3 business days.</p>
                            <p style={{margin:"1rem 0 0 0",fontSize:"13px",cursor:"pointer"}}>Online Refund</p>
                            <p style={{margin:"0 0 1rem 0",fontSize:"13px",cursor:"pointer"}}>Time the item takes to reach us +7 to 10 business days.</p>
                            <p style={{margin:"1rem 0 0 0",fontSize:"13px",cursor:"pointer"}}>PhonePe Wallet</p>
                            <p style={{margin:"0",fontSize:"13px",cursor:"pointer"}}>Time the item takes to reach us +1 business day.</p>
                        </div>
                        <div class="sellerlocation" style={{backgroundColor:"white"}}>
                             <p style={{fontSize:"13px",color:"grey"}}>
                                STILL NEED HELP?
                            </p>
                            <hr style={{ margin: '1% 0' }} />
                            <p style={{margin:"0",fontSize:"13px",cursor:"pointer"}}>Have queries? please get in touch and we will be happy to help you</p>
                            <p style={{margin:"0",fontSize:"15px",cursor:"pointer",color:"#c2172e"}}>Contact Us <i class='bx bxs-chevron-right' style={{position:'relative',top:"0.07rem"}}></i></p>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}