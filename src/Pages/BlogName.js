/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { Card } from '../Components/Blogs/Card';

export const BlogName = () => {

    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{ backgroundColor: "#f5f5f5" }}>
                    <Navbar></Navbar>
                    <section className="bodypanelmian aboutseller text-left">
                        <div className="sellerlocation" style={{ backgroundColor: "white", width: "100%", marginLeft: "0px" }}>
                            <img src="/image/m-product/s10plus.jpg" style={{ width: "100%" }}></img>
                            <div className="container" style={{ margin: "10px 0 10px 12px" }}>
                                <div className="row" style={{width: '100%'}}>
                                    <div className="col-9"><h6><b>Business of Mobiles</b></h6></div>
                                    <div className="col-3" style={{ color: "gainsboro" }}><p style={{textAlign: 'right'}}>5 min read</p></div>
                                </div>
                            </div>
                            <div style={{ margin: "5px 10px 5px 10px" }}>
                                <p style={{ fontSize: "12px" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida aliquam porttitor.
                                    Aenean lorem orci, commodo vel finibus sit amet, faucibus aliquam erat. Cras tellus orci,
                                    elementum sed ipsum a, lacinia luctus massa. Donec mi lorem, sollicitudin ut sollicitudin
                                    ac, congue at arcu. Duis maximus ex et lorem finibus commodo. Integer quis eleifend est,
                                    et imperdiet urna. Cras sit amet ultricies mi. Cras eget urna ullamcorper, scelerisque nisi
                                    at, aliquet magna. Fusce faucibus euismod nibh, ac malesuada purus lobortis vitae. Aenean eu
                                    odio rhoncus ipsum pulvinar congue. Donec luctus interdum sagittis. Praesent in ultricies
                                    lacus. Proin sem augue, accumsan ut justo ac, lobortis mollis magna. Phasellus convallis
                                    tincidunt lorem, a volutpat massa interdum vitae. Nulla facilisi.

                                    Nullam in semper sem, nec pharetra libero. Curabitur sed finibus mi. Etiam lobortis congue
                                    felis quis tristique. Nulla mattis, metus eget ornare lacinia, tellus tellus blandit ligula,
                                    ac fringilla mauris justo varius leo. Nunc nec aliquet quam, vel dignissim erat. Suspendisse
                                    euismod suscipit augue, in vestibulum turpis faucibus sit amet. In auctor risus consequat,
                                    dapibus lorem et, fermentum neque. Donec pharetra velit nec mauris ornare eleifend. Fusce
                                    iaculis lorem id venenatis mattis.

                                    Donec sit amet vehicula velit, vel laoreet dui. Cras posuere arcu ut turpis porta, sit
                                    amet gravida augue tincidunt. Nam sit amet augue et nisi congue semper. Morbi quis quam
                                    non augue varius egestas. Donec iaculis semper sem quis bibendum. Fusce scelerisque est
                                    at elit finibus consequat. Suspendisse eget pretium lectus, a venenatis est. Mauris
                                    eleifend tristique lacus, a viverra mi condimentum eget. Fusce vehicula auctor mattis.
                                    Maecenas sollicitudin mi vel dolor aliquet molestie. Pellentesque vel venenatis est.
                                    Suspendisse faucibus nunc eu risus mattis, nec bibendum enim eleifend. Donec vulputate
                                    odio turpis, eu interdum nisi cursus et. Integer scelerisque suscipit nibh in mattis.
                                    Mauris auctor blandit magna, nec finibus ligula elementum vel.
                            </p>
                            </div>
                            <div>
                                <p style={{ textAlign: "right", fontSize: "12px", color: "gainsboro" }}>Article by Kartikeya Agarwal</p>
                            </div>
                        </div>
                        <div>
                            <p style={{ color: "gray", margin: "10px 10px 10px 20px" }}><b>Related Blogs</b></p>
                        </div>
                        <div style={{margin:"12px 12px 12px 12px", whiteSpace:"nowrap", overflowX:"scroll", paddingBottom:"20px"}}>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
