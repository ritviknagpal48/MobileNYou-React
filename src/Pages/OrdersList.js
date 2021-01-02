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
                        <OrdersCard orderStatus="Order Placed" card={true}/>
                        <OrdersCard orderStatus="Dispatched" card={true}/>
                        <OrdersCard orderStatus="Out of Delivery" card={true}/>
                        <OrdersCard orderStatus="Refund Successful" card={true}/>
                        <OrdersCard orderStatus="Delivered" card={true}/>
                        <OrdersCard orderStatus="Delivered" review={true} card={true}/>
                        <OrdersCard orderStatus="Cancelled" card={true}/>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                            <button className="btn" style={{margin:"2% 0", padding: "2% 9%", border: "#c2172e solid 2px", borderRadius:"2px", backgroundColor: "white", color: "#c2172e",height:"3rem" }}><b><span style={{float:"left"}}>Continue Shopping</span> <i style={{fontSize:"24px",float:"left"}} class='bx bx-right-arrow-alt'></i></b></button>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    );
};