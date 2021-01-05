import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { UploadCV } from '../Components/Career/UploadCV';
import { Footer } from '../Components/Footer';

export const BusinessIntelligence = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{ backgroundColor: "#F5F5F5" }}>
                    <Navbar />
                    <section class="bodypanelmian aboutseller text-left">
                      <UploadCV />
                    </section>
                    <Footer></Footer>
                </div>
            </div>
        </Fragment>
    )
}
 