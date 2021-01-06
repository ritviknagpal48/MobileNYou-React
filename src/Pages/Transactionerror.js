import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';

export const Transactionerror = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height:"100vh"}}>
                    <div class="container graybg" style={{ backgroundColor: "#f5f5f5"}}>
                    <Navbar />
                    <section class="bodypanelmian">
                        <img src="/icons/Fail.png" style={{width:"50%",height:"auto", marginTop:'50%'}}></img>
                        <div>
                            <p style={{color:'#c2172e', fontSize:'18px', marginTop:'5%'}}><b>Transaction Failed</b></p>
                            <p style={{color:'grey', fontSize:'12px'}}>Sorry, Your Transaction Has Been Failed. Please Try Again</p>
                        </div>
                        
                        <button className="btn" style={{ marginTop: '3%', padding: "0% 15%", border: "#c2172e solid 2px", backgroundColor: "white", color: "#c2172e",height:"3rem" }}><b><span style={{float:"left"}}>Go to Cart</span> <i style={{fontSize:"24px",float:"left"}} class='bx bx-right-arrow-alt'></i></b></button>
                    </section>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};