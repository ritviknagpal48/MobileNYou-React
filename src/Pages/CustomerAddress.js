import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import {SingleCustomerAddress} from '../Components/CustomerAddress/SingleCustomerAddress';

export const CustomerAddress = () => {
  return (
    <Fragment>
        <div class='badydiv'>
            <div class='universalDiv'>
            <section className="bodypanelmian aboutseller text-left" style={{ marginBottom: '20%', paddingBottom: '10px' }}>
                <div style={{width:"100%",height:"3rem",backgroundColor:"#c2172e",color:"white"}}>
                    <i class='bx bx-arrow-back' style={{fontSize: "1.3rem",
                                                        margin: "0.7rem 0.3rem",
                                                        position: "relative",
                                                        top: "0.1rem"}}></i>                    
                    <span style={{fontSize:"1.3rem"}}>Addresses</span>
                </div>
                <SingleCustomerAddress></SingleCustomerAddress>
                <SingleCustomerAddress></SingleCustomerAddress>
                <SingleCustomerAddress></SingleCustomerAddress>
                <SingleCustomerAddress></SingleCustomerAddress>

                <div className=''>
                  <button type="button" class="btn btn-outline-danger" style={{ padding: '2%', width: '92%', margin: '0% 4%'}}><span style={{ fontSize: '18px' }}><b> &#43; Add Address</b></span></button>
                </div>
            </section>

            </div>
        </div>
    </Fragment>
  );
}