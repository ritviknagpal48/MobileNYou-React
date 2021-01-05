import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const ReturnRequest = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh'}}>
                    <RedNavbar navbar="Request Return"></RedNavbar>
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
                      <div className='sellerlocation' style={{backgroundColor: '#fff'}}>
                            <p style={{ color: 'grey'}}>
                              PLEASE CHOOSE REASON FOR RETURN
                            </p>
                            <hr style={{ margin: '1% 0' }} />
                            <input type="radio" id="cancel-reason-1" name="cancel-reason" value="cancel-reason-1" style = {{margin: '0rem 0.5rem', transform: 'scale(0.8)', backgroundColor: 'red'}} />
                            <label for="cancel-reason-1"><p style={{fontSize: '12px'}}>I have purchased the product else where</p></label>

                            <br />

                            <input type="radio" id="cancel-reason-2" name="cancel-reason" value="cancel-reason-2" style = {{margin: '0rem 0.5rem', transform: 'scale(0.8)'}} />
                            <label for="cancel-reason-2"><p style={{fontSize: '12px'}}>I will not be available at home on delivery day</p></label>

                            <br />

                            <input type="radio" id="cancel-reason-3" name="cancel-reason" value="cancel-reason-3" style = {{margin: '0rem 0.5rem', transform: 'scale(0.8)'}} />
                            <label for="cancel-reason-3"><p style={{fontSize: '12px'}}>I want to change address for the order</p></label>

                            <br />

                            <input type="radio" id="cancel-reason-4" name="cancel-reason" value="cancel-reason-4" style = {{margin: '0rem 0.5rem', transform: 'scale(0.8)'}} />
                            <label for="cancel-reason-4"><p style={{fontSize: '12px'}}>I have changed my mind</p></label>

                            <br />

                            <input type="radio" id="cancel-reason-5" name="cancel-reason" value="cancel-reason-5" style = {{margin: '0rem 0.5rem', transform: 'scale(0.8)'}} />
                            <label for="cancel-reason-5"><p style={{fontSize: '12px'}}>Want to change my phone number</p></label>

                            <br />

                            <input type="radio" id="cancel-reason-6" name="cancel-reason" value="cancel-reason-6" style = {{margin: '0rem 0.5rem', transform: 'scale(0.8)'}} />
                            <label for="cancel-reason-6"><p style={{fontSize: '12px'}}>Price for the product has decreased</p></label>

                            <br />

                            <input type="radio" id="cancel-reason-7" name="cancel-reason" value="cancel-reason-7" style = {{margin: '0rem 0.5rem', transform: 'scale(0.8)'}} />
                            <label for="cancel-reason-7"><p style={{fontSize: '12px'}}>Expected delivery time is very long</p></label>
                        </div>
                        <div style={{fontFamily: 'Open Sans, sans-serif !important', margin:"1em .9em", boxShadow: '0px 0px 4px 1px gainsboro', padding: '.7em .7em'}}>
                            <textarea style={{width:"100%", border:"none", height:"4rem", padding:"9px", boxSizing:"border-box"}} placeholder="Comment (Optional)"></textarea>
                        </div>
                        <div className="submit-button" style={{position:"relative", display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column", top: '0rem !important'}}>
                            <button type="button" class="btn btn-danger" style={{backgroundColor:" #c2172e",width:"92%", marginBottom: '2rem'}}>SUBMIT</button>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}