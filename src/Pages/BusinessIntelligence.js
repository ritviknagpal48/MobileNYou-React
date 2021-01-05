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
                      <div className="sellerlocation" style={{ backgroundColor: "#fff" }}>
                        <h3>Business Intelligence</h3>
                        <p>Position 6</p>
                        <p><span style={{ color: "gray" }}>Required Skills</span></p>
                        <ul style={{margin: '0em .9em'}}>
                          <li><p>Analysis of customer behavior to provide insights</p></li>
                          <li><p>Analysis of customer behavior to provide insights</p></li>
                          <li><p>Analysis of customer behavior to provide insights</p></li>
                          <li><p>Analysis of customer behavior to provide insights</p></li>
                          <li><p>Analysis of customer behavior to provide insights</p></li>
                          <li><p>Analysis of customer behavior to provide insights</p></li>
                        </ul>

                        <p style={{marginTop: '0.5rem'}}><span style={{ color: "gray" }}>Experience</span></p>
                        <p>2-5 Year</p>

                        <p style={{marginTop: '0.5rem'}}><span style={{ color: "gray" }}>Job Description</span></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                      </div>
                      <UploadCV btn={false} />
                    </section>
                    <Footer></Footer>
                </div>
            </div>
        </Fragment>
    )
}
 