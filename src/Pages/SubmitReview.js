import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const SubmitReview = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh', backgroundColor:"#f5f5f5"}}>
                    <RedNavbar navbar="Review"></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left">
                    <div class="sellerlocation" style={{backgroundColor:"white"}}>
                            <div class="row">
                                <div className="col-3">
                                    <img src='/image/RealmeX50Pro.jpg' className='img-fluid' alt='img1' />
                                </div>
                                <div className="col-9" style={{textAlign: 'left'}}>
                                    <p style={{lineHeight:"1rem",marginBottom:"0.4rem", fontSize:"0.8rem"}}>Realme X50 Pro 5G (Rust Red, 256GB)<br></br> (12GB RAM)</p>
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
                        <div style={{margin:"5%", boxShadow:"0px 0px 4px 1px gainsboro"}}>
                            <textarea style={{width:"100%", border:"none", height:"9rem", padding:"9px", boxSizing:"border-box"}} placeholder="Your opinion matters to us. Write your review"></textarea>
                        </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="/image/m-product/img5.png" style={{height:"50%"}}></img>
                                        <i class='bx bxs-x-circle' style={{position:"absolute", top:"0rem", right:"16px", color:"#c2172e"}}></i>
                                    </div>
                                    <div className="col-4">
                                        <img src="/image/m-product/img5.png" style={{height:"50%"}}></img>
                                        <i class='bx bxs-x-circle' style={{position:"absolute", top:"0rem", right:"16px", color:"#c2172e"}}></i>
                                    </div>
                                    <div className="col-4">
                                        <img src="/image/m-product/img5.png" style={{height:"50%"}}></img>
                                        <i class='bx bxs-x-circle' style={{position:"absolute", top:"0rem", right:"16px",  color:"#c2172e"}}></i>
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