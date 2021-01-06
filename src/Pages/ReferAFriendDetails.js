import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';

export const ReferAFriendDetails = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{ backgroundColor: "#F5F5F5" }}>
                    <Navbar />
                    <section class="bodypanelmian aboutseller text-left"> 
                      <img src='/image/Refer/ReferAFriend-Details.png' width="100%" />
                      <div className="sellerlocation" style={{backgroundColor:"#f5f5f5", position: 'relative', borderBottomLeftRadius: '100% 50px', borderBottomRightRadius: '100% 50px', boxShadow: '0 -3px 4px 1px gainsboro inset', top:'-1rem', zIndex:'2'}}></div>
                      <div className="sellerlocation" style={{backgroundColor:"white", position: 'relative', top: '-3.3rem', boxShadow: '0px 4px 4px 1px gainsboro'}}>
                          <br />
                          <div className="container">
                            <div className="row">
                              <div className="col-3">
                                <img src="/image/Refer/BlackCircle.png" />
                              </div>
                              <div className="col-9">
                                <p style={{fontSize:'14px'}}>Step 1</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-3">
                                <img src="/image/Refer/BlackCircle.png" />
                              </div>
                              <div className="col-9">
                                <p style={{fontSize:'14px'}}>Step 2</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-3">
                                <img src="/image/Refer/BlackCircle.png" />
                              </div>
                              <div className="col-9">
                                <p style={{fontSize:'14px'}}>Step 3</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                              </div>
                            </div>
                          </div>
                          <div style={{marginTop: '1rem'}}>
                            <p style={{fontSize:'14px'}}>What is Mobile-And-You Refer</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                          <div style={{marginTop: '1rem'}}>
                            <p style={{fontSize:'14px'}}>How to use Mobile-And-You money</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                          <div style={{marginTop: '1rem'}}>
                            <p style={{fontSize:'14px'}}>How to use Mobile-And-You money</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
