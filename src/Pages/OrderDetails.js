import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const OrderDetails = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh', backgroundColor: '#f5f5f5'}}>
                    <RedNavbar navbar="Order"></RedNavbar>
                    <section class="bodypanelmian aboutseller">
                        <div class="sellerlocation" style={{backgroundColor:"white"}}>
                            <p style={{color:"grey",fontSize:"9px"}}><span style={{float:"left"}}>Order ID: #12345678910221321</span> <span style={{float:"right"}}>Placed Date: 15 March 2020</span></p>
                            <br/>
                            <div class="row">
                                <div className="col-3">
                                    <img src='/image/RealmeX50Pro.jpg' className='img-fluid' alt='img1' />
                                </div>
                                <div className="col-9" style={{textAlign: 'left'}}>
                                    <p style={{lineHeight:"1rem",marginBottom:"0.4rem"}}>Realme X50 Pro 5G (Rust Red, 256GB)<br></br> (12GB RAM)</p>
                                    <p><span style={{float:"left"}}><i className='fas fa-rupee-sign' /> 599</span><span style={{float:"right",color:"grey"}}>Seller : Cartnyou</span></p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}