import React, { Fragment } from 'react';
import {SingleCustomerAddress} from '../Components/CustomerAddress/SingleCustomerAddress';
import {RedNavbar} from "../Components/RedNavbar";

export const CustomerAddress = () => {
  return (
    <Fragment>
        <div class='badydiv'>
            <div class='universalDiv' style={{backgroundColor: '#f5f5f5', height: '100vh'}}>
            <section className="bodypanelmian aboutseller text-left" style={{ marginBottom: '20%', paddingBottom: '10px' }}>
                <RedNavbar navbar="Addresses"></RedNavbar>
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