/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';

export const HorizontalCard = () => {
    return (
        <Fragment>
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row no-gutters">
                    <div class="col-4">
                        <img src="/image/m-product/iphone.jpg" class="card-img" alt="" style={{ height: "100%" }} />
                    </div>
                    <div class="col-8">
                        <div class="card-body" style={{ fontSize: "12px" }}>
                            <h6 class="card-title"><b>Business of Mobiles</b></h6>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida aliquam porttitor.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};