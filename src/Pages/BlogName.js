/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';

export const BlogName = () => {

    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{ backgroundColor: "#f5f5f5" }}>
                    <Navbar></Navbar>
                    <section className="bodypanelmian aboutseller text-left">
                        <div className="sellerlocation" style={{backgroundColor:"white",}}>
                            <img src="/image/m-product/s10plus.jpg" style={{ width: "100%" }}></img>
                            <div className="container">
                                <div className="row">
                                    <div className="col-8"><h6><b>Business of Mobiles</b></h6></div>
                                    <div className="col-4" style={{color:"gainsboro"}}><p>5 min read</p></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
