import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const OrderDetails = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '110vh', backgroundColor: '#f5f5f5'}}>
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
                    <section class="bodypanelmian aboutseller text-left" style={{ marginBottom: '20%', paddingBottom: '10px' }}>
                        <div className="sellerlocation" style={{backgroundColor: '#fff'}}>
                            <div class='progress' style={{height:"8rem", backgroundColor: '#fff'}}>
                                <div class='progress_inner'>
                                <div class='progress_inner__step'>
                                    <label for='step-1'>Order Placed</label>
                                </div>
                                <div class='progress_inner__step'>
                                    <label for='step-2'>Shipped</label>
                                </div>
                                <div class='progress_inner__step'>
                                    <label for='step-3'>Out for Delivery</label>
                                </div>
                                <div class='progress_inner__step'>
                                    <label for='step-4'>Delivered</label>
                                </div>
                                
                                <input checked='checked' id='step-1' name='step' type='radio'/>
                                <input id='step-2' name='step' type='radio'/>
                                <input id='step-3' name='step' type='radio'/>
                                <input id='step-4' name='step' type='radio'/>
                                <input id='step-5' name='step' type='radio'/>
                                <div class='progress_inner__bar' style={{top:"0.7rem"}}></div>
                                <div class='progress_inner__bar--set' style={{top:"0.3rem"}}></div>
                                </div>
                            </div>
                        </div>

                        <div class="sellerlocation" style={{backgroundColor:"white",height:"2.8rem"}}>
                            <p><span style={{float:"left"}}>Cancel Order</span><span style={{float:"right"}}><i class='bx bxs-chevron-right'></i></span></p>
                        </div>
                        <div class="sellerlocation" style={{backgroundColor:"white",height:"2.8rem"}}>
                            <p><span style={{float:"left"}}>Support Center</span><span style={{float:"right"}}><i class='bx bxs-chevron-right'></i></span></p>
                        </div>
                        <div className='sellerlocation' style={{backgroundColor: '#fff'}}>
                            <p style={{ color: 'grey'}}>
                            Shipping Address:
                            </p>
                            <hr style={{ margin: '1% 0' }} />
                            <h3 style={{marginTop: '0.4rem'}}>
                            <b>Neeraj Sharma <span className='text-right' style={{ backgroundColor: 'lightgray', padding: '2px 10px', fontSize: '10px' }}>Office</span></b>
                            </h3>
                            <p style={{margin: '0'}}>
                                36476  PfannerStill, Lokhandwala
                            </p>
                            <p style={{margin: '-1% 0'}}>
                                Charminar 68761
                            </p>
                            <p style={{margin: '0'}}>
                                Delhi - 110045
                            </p>
                            <p>
                                Phone No. : +91-9123-4101-01
                            </p>
                        </div>
                        <div className='sellerlocation' style={{backgroundColor: '#fff'}}>
                            <p style={{ color: 'grey' }}>
                            Price Details
                            </p>
                            <hr style={{ margin: '1% 0' }} />
                            <p>
                                MRP
                                <span className='text-right' style={{ float: 'right' }}>&#8377; 5000</span>
                            </p>

                            <p>
                                Item Discount
                                <span className='text-right' style={{ float: 'right' }}> (&minus;) &#8377; 500</span>
                            </p>

                            <p>
                                Card Payment
                                <span className='text-right' style={{ float: 'right' }}> &#8377; 4500</span>
                            </p>
                            <p>
                                Shipping Cost
                                <span className='text-right' style={{ float: 'right'}}> 
                                    Free Shipping 
                                </span>
                            </p>
                            <hr style={{ margin: '2% 0' }} />
                            <p>
                            Total
                                <span className='text-right' style={{ float: 'right' }}> &#8377; 4500</span>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}