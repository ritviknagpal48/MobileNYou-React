import React, { Fragment } from 'react';
import { RedNavbar } from "../Components/RedNavbar";
import { OrdersCard } from "../Components/OrdersCard"

export const OrdersList = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{backgroundColor:"#f5f5f5", height:"calc(100vh)"}}>
                    <div class="container" style={{ backgroundColor: "white" }}></div>
                    <RedNavbar navbar="Orders" />
                    <section class="bodypanelmian">
                        <OrdersCard />
                        <OrdersCard />
                        <OrdersCard />
                        <OrdersCard />
                    </section>
                </div>
            </div>
        </Fragment>
    );
};