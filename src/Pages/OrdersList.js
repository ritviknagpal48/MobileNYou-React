import React, { Fragment } from 'react';
import { RedNavbar } from "../Components/RedNavbar";
import { OrdersCard } from "../Components/OrdersCard"

export const OrdersList = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{backgroundColor:"#f5f5f5"}}>
                    <div class="container" style={{ backgroundColor: "white" }}></div>
                    <RedNavbar navbar="Orders" />
                    <section class="bodypanelmian">
                        <OrdersCard orderStatus="Dispatched"/>
                        <OrdersCard orderStatus="Out of Delivery"/>
                        <OrdersCard orderStatus="Refund Successful"/>
                        <OrdersCard orderStatus="Delivered"/>
                        <OrdersCard orderStatus="Delivered" review={false}/>
                        <OrdersCard orderStatus="Cancelled"/>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                            <button className="btn" style={{marginTop:"8%", padding: "2% 9%", border: "#c2172e solid 2px", borderRadius:"2px", backgroundColor: "white", color: "#c2172e",height:"3rem" }}><b><span style={{float:"left"}}>Continue Shopping</span> <i style={{fontSize:"24px",float:"left"}} class='bx bx-right-arrow-alt'></i></b></button>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    );
};