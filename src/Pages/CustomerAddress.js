import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import {SingleCustomerAddress} from '../Components/CustomerAddress/SingleCustomerAddress';

export const CustomerAddress = () => {
  return (
    <Fragment>
        <div class='badydiv'>
            <div class='universalDiv'>
            <section className="bodypanelmian aboutseller text-left" style={{ marginBottom: '20%', paddingBottom: '10px' }}>
                <Navbar></Navbar>
                <SingleCustomerAddress></SingleCustomerAddress>
            </section>

            </div>
        </div>
    </Fragment>
  );
}