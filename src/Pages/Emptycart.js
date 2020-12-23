import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';

export const Emptycart = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv">
                    <div class="container" style={{ backgroundColor: "white" }}></div>
                    <Navbar />
                </div>
            </div>
            <section class="bodypanelmian"></section>
        </Fragment>
    );
};