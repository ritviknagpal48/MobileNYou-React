/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';

export const Card = () => {
    return (
        <Fragment>
            <div class="card" style={{ width: "18rem", display: "inline-block", whiteSpace: "break-spaces", marginLeft: "10px", marginRight: "10px" }}>
                <img class="card-img-top" src="/image/m-product/s10plus.jpg" alt="Card image cap" />
                <div class="card-body">
                    <h6 class="card-title"><b>Business of Mobile</b></h6>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida aliquam porttitor. Aenean lorem orci, commodo vel finibus sit amet, faucibus aliquam erat.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </Fragment>
    );
};