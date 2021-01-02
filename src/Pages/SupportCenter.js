import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";
import { OrdersCard } from "../Components/OrdersCard";

export const SupportCenter = () => {

    function Expand(e){
        e.target.style.display="none";
        document.getElementById("expand-issue-list").style.display="block"
    }

    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh',backgroundColor:"#F5F5F5"}}>
                    <RedNavbar navbar="Support Center"></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left">
                      <div class="sellerlocation" style={{backgroundColor:"white"}}>
                            <div class="row">
                                <div className="col-8" style={{textAlign: 'left'}}>
                                  Manage Your Order
                                  <p>To track, cancel, return/exchange or more options, go to</p>
                                  <p style={{color: '#c2172e'}}>Go to My Order <i class='bx bxs-chevron-right' style={{position: 'relative', top: '0.07rem'}}></i></p>
                                </div>
                                <div className="col-4" style={{textAlign: 'right'}}><img src="/icons/Fail.png" /></div>
                            </div>
                        </div>
                        <div class="sellerlocation" style={{backgroundColor:"white"}}>
                            <OrdersCard orderStatus="Order Placed" card={false}></OrdersCard>
                            <OrdersCard orderStatus="Order Placed" card={false}></OrdersCard>
                            <OrdersCard orderStatus="Order Placed" card={false}></OrdersCard>
                            <OrdersCard orderStatus="Order Placed" card={false}></OrdersCard>
                            <p onClick={Expand} style={{color:"#c2172e",textAlign:"center",fontSize:"16px",cursor:"pointer"}}>View All</p>
                            <div id="expand-issue-list" style={{display:"none"}}>
                                <OrdersCard orderStatus="Order Placed" card={false}></OrdersCard>
                                <OrdersCard orderStatus="Order Placed" card={false}></OrdersCard>
                                <OrdersCard orderStatus="Order Placed" card={false}></OrdersCard>
                            </div>
                        </div>
                      <div class="sellerlocation" style={{backgroundColor:"white"}}>
                            <p style={{ color: 'grey',fontSize:"13px"}}>
                                ANY OTHER ISSUE?
                            </p>
                            <hr style={{ margin: '1% 0' }} />
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>Account Related Queries</p>
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>Payment Related Queries</p>
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>Mobiles and you Service Queries</p>
                            <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>Report an Error</p>
                            <p onClick={Expand} style={{color:"#c2172e",textAlign:"center",fontSize:"16px",cursor:"pointer"}}>View All</p>
                            <div id="expand-issue-list" style={{display:"none"}}>
                                <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>Lorem Ipsum</p>
                                <p style={{margin:"1rem 0",fontSize:"13px",cursor:"pointer"}}>Lorem Ipsum</p>
                                <p style={{margin:"1rem 0 0 0",fontSize:"13px",cursor:"pointer"}}>Lorem Ipsum</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}