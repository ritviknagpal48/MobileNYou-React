import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import {SingleCustomerAddress} from '../Components/CustomerAddress/SingleCustomerAddress';

export const CustomerAddress = () => {
  return (
    <Fragment>
        <div class='badydiv'>
            <div class='universalDiv'>
                <Navbar></Navbar>
            </div>
        </div>
    </Fragment>
  );
}