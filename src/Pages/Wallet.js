import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const Wallet = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh', backgroundColor: '#f5f5f5'}}>
                    <RedNavbar navbar="MNU Wallet"></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left">
                        <div className="sellerlocation" style={{backgroundColor:"#D1E7DD"}}>
                            <p style={{fontSize:"14px"}}><b>Your MNU Wallet Ballance</b></p>
                            <p style={{fontSize:"18px",color:"green"}}>&#8377;599</p>
                            <p style={{color:"grey",fontSize:"12px"}}>10% redemption limit applicable</p>
                        </div>
                      <div className='sellerlocation' style={{ backgroundColor: "white" }}>
                        <p style={{ color: 'lightgrey' }}>
                            Wallet Summary
                        </p>
                        <hr style={{ margin: '1% 0' }} />
                        <p>
                            <b>Oct 28, 2020</b>
                        <span className='text-right' style={{ float: 'right', color: '#c2172e' }}>&minus; &#8377; 599</span>
                        </p>
                      </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}