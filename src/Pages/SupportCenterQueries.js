import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";


export const SupportCenterQueries = () => {

    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh',backgroundColor:"#F5F5F5"}}>
                    <RedNavbar navbar="Support Center"></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left">
                    <div class="sellerlocation" style={{backgroundColor:"white"}}>
                             <p style={{ color: 'grey',fontSize:"13px"}}>
                                ACCOUNT RELATED QUERIES
                            </p>
                            <hr style={{ margin: '1% 0' }} />
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>I want to deactivate my Mobile and You account<span style={{float:"right"}}><i class='bx bxs-chevron-right'></i></span></p>
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>Something's wrong with my Wishlist<span style={{float:"right"}}><i class='bx bxs-chevron-right'></i></span></p>
                        </div>

                    </section>
                </div>
            </div>
        </Fragment>
    )
}