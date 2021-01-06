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
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
