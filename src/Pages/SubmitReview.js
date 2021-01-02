import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const SubmitReview = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh'}}>
                    <RedNavbar navbar="Review"></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left">
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
                        <div class="sellerlocation" style={{backgroundColor:"white"}}>
                            <div className="row" >
                                <div className="col-6" style={{textAlign: 'left'}}>
                                <i class='bx bxs-star' style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                <i class='bx bxs-star' style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                <i class='bx bxs-star' style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                <i class='bx bxs-star' style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                <i class='bx bxs-star' style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                </div>
                            </div>
                        </div>
                        <div className="sellerlocation">
                            <textarea style={{width:"100%", border:"none", height:"6rem"}} placeholder="Your opinion matters to us. Write your review"></textarea>
                        </div>
                        <div className="sellerlocation">
                            <div className="container">
                                <div className="row">
                                <div className="col-4">
                                <img src="/image/m-product/img5.png"></img>
                                <i class='bx bxs-x-circle' style={{position:"absolute", top:"0rem", right:"16px"}}></i>
                            </div>
                            <div className="col-4">
                                <img src="/image/m-product/img5.png"></img>
                                <i class='bx bxs-x-circle' style={{position:"absolute", top:"0rem", right:"16px"}}></i>
                            </div>
                            <div className="col-4">
                                <img src="/image/m-product/img5.png"></img>
                                <i class='bx bxs-x-circle' style={{position:"absolute", top:"0rem", right:"16px"}}></i>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="save-changes-button" style={{position:"relative",top:"14rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                            <button type="button" class="btn btn-danger" style={{backgroundColor:" #c2172e",width:"90%"}}>Save Changes</button>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}