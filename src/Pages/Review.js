import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';

export const Review = () => {
    return (

        <Fragment>
            <div class="badydiv">
                <div class="universalDiv">
                    <div class="container" style={{backgroundColor: "white" }}>
                        <Navbar></Navbar>

                    </div>
                    <section class="bodypanelmian">
                        <div class="container">
                            <div class="row no-gutters">
                                <div class="col-12">
                                    <div class="productimg">
                                        <div class="wishlistsection">
                                            <div class="icon">
                                                <i class="fas fa-heart"></i>
                                            </div>
                                        </div>
                                        <div class="flashsale">
                                            <div class="flashslder">
                                                <div class="productview">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <div class="brandbox">
                                                                <img src="image/home/flash/img1.png" class="img-fluid"/>
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="brandbox">
                                                                <img src="image/home/flash/img1.png" class="img-fluid"/>
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="brandbox">
                                                            <img src="image/home/flash/img1.png" class="img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Add Pagination */}
                                                    <br />
                                                    <div class="swiper-pagination"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters" style={{width:"100%"}}>
                                    <div class="col-12">
                                        <div class="flashsale">
                                            <div class="productdetails text-left txt">
                                                <h5 class="p-name">Realme x50 Pro Realme x50 Pro Realme x50 Pro Realme x50 Pro</h5>
                                                <div class="price d-flex float-left">
                                                    <p class="m-price"><i class="fas fa-rupee-sign" aria-hidden="true"></i> 599</p>
                                                    <span class="full-p"><i class="fas fa-rupee-sign" aria-hidden="true"></i> 899</span>
                                                    <span class="offp">50% off</span>
                                                </div>
                                                <div class="rateing text-right">
                                                    <p class="rate"><img src="image/star.svg" class="star"/> 4.2</p><br/>
                                                    <p class="ratingcount">3214323 Reviews</p>
                                                </div>
                                                <div class="emi">
                                                    <p><img src="image/Calculator.svg" /> EMI Start at <img src="image/bx-rupee.svg" class="rup"/> 500 <img src="image/info.svg"/></p>
                                                </div>
                                            </div>
                                            <div id="profile-description">
                                                <div class="offer-section text-left text show-more-height">
                                                    <h3>Offers</h3>
                                                    <div class="br">
                                                        <div class="tc">
                                                            <div class="centerdiv d-flex justify-content-between">
                                                                <p><img src="image/Tag.svg" /> No Cost EMI: No cost EMI available on select cards.<br />  Please check'EMI options' </p>
                                                                <p><b>T&C</b></p>
                                                            </div>
                                                        </div>
                                                        <div class="tc">
                                                            <div class="centerdiv d-flex justify-content-between">
                                                                <p><img src="image/Tag.svg"/> No Cost EMI: No cost EMI available on select cards.<br/>  Please check'EMI options' </p>
                                                                <p><b>T&C</b></p>
                                                            </div>
                                                        </div>
                                                        <div class="tc">
                                                            <div class="centerdiv d-flex justify-content-between">
                                                                <p><img src="image/Tag.svg"/> No Cost EMI: No cost EMI available on select cards.<br/>  Please check'EMI options' </p>
                                                                <p><b>T&C</b></p>
                                                            </div>
                                                        </div>
                                                        <div class="tc">
                                                            <div class="centerdiv d-flex justify-content-between">
                                                                <p><img src="image/Tag.svg"/> No Cost EMI: No cost EMI available on select cards.<br/>  Please check'EMI options' </p>
                                                                <p><b>T&C</b></p>
                                                            </div>
                                                        </div>
                                                        <div class="tc">
                                                            <div class="centerdiv d-flex justify-content-between">
                                                                <p><img src="image/Tag.svg"/> No Cost EMI: No cost EMI available on select cards.<br/>  Please check'EMI options' </p>
                                                                <p><b>T&C</b></p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <p class="moreoffer show-more">+5 More Offer Available </p>
                                            </div>
                                            <div class="cod-redplace d-flex text-left justify-content-around">
                                                <p><img src="image/Cancel.svg"/> <br/> 10 Days Replacement</p>
                                                <p><img src="image/Check.svg"/> <br/> Cash on Delivery </p>
                                                <p><img src="image/Cancel.svg"/> <br/> Free Shipping</p>
                                            </div>
                                            <div class="delivery text-left">
                                                <h3 class="bd">Delivery  Details</h3>
                                                <div class="deliverymian">
                                                    <div class="pinc d-flex justify-content-between">
                                                        <p class="showpin"><img src="image/Loaction.svg"/> 110045</p>
                                                        <p class="changepin">Change Pincode <i class="fas fa-chevron-right"></i></p>
                                                    </div>
                                                    <div class="expect">
                                                        <h3>Expected Delivery 27 Nov</h3>
                                                        <p>The final Delivery Date will Depend on the items in your bag</p>
                                                    </div>
                                                    <div class="cod">
                                                        <p>Cash on Delivery Available</p>
                                                    </div>
                                                </div>
                                                <div class="changepin" style={{display: "none;"}}>
                                                    <div class="form-group d-flex">
                                                        <input type="text" class="form-control"  placeholder="Enter Pincode"/>
                                                        <button type="button" class="btn btn-danger bgbtn">Check</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="selectvariants text-left">
                                                <h3>Select Variants</h3>
                                                <div class="boxvariats">
                                                    <p class="condition">Condition</p>
                                                    <div class="tabv d-flex">
                                                        <p>Renewed</p>
                                                        <p class="active">Suberb</p>
                                                    </div>
                                                    <ul class="d-flex justify-content-between">
                                                        <li>47 Quality Check</li>
                                                        <li>Warranty From Seller</li>
                                                        <li>Easy Return</li>
                                                    </ul>
                                                    <div class="rightarrw">
                                                        <i class="fas fa-chevron-right" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="selectvariants text-left">
                                                <div class="boxvariats">
                                                    <ul class="d-flex justify-content-start pt-0">
                                                        <p>
                                                        <span class="tp">Color</span><br/>
                                                        <span class="bt">Space Black</span>
                                                        </p>
                                                        <p>
                                                        <span class="tp">Storage</span><br/>
                                                        <span class="bt">64GB</span>
                                                        </p>
                                                        <p>
                                                        <span class="tp">Ram</span><br/>
                                                        <span class="bt">4GB</span>
                                                        </p>
                                                    </ul>
                                                    <div class="rightarrw tw">
                                                        <i class="fas fa-chevron-right" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="specification">
                                                <h3 class="text-left">Specification</h3>
                                                <div class="sdetails">
                                                    <div class="row no-gutters" >
                                                        <div class="col">
                                                            <p class="text-left"><i class="fas fa-circle" aria-hidden="true"></i> Display</p>
                                                        </div>
                                                        <div class="col">
                                                            <p class="text-right">16.56 cm (6.52 inch)</p>
                                                        </div>
                                                    </div>
                                                    <div class="row no-gutters" >
                                                        <div class="col">
                                                        <p class="text-left"><i class="fas fa-circle" aria-hidden="true"></i> Resolution</p>
                                                        </div>
                                                        <div class="col">
                                                        <p class="text-right">16.56 cm </p>
                                                        </div>
                                                    </div>
                                                    <div class="row no-gutters">
                                                        <div class="col">
                                                        <p class="text-left"><i class="fas fa-circle" aria-hidden="true"></i> Resolution Type</p>
                                                        </div>
                                                        <div class="col">
                                                        <p class="text-right">16.56 cm </p>
                                                        </div>
                                                    </div>
                                                    <div class="row no-gutters">
                                                        <div class="col">
                                                        <p class="text-left"><i class="fas fa-circle" aria-hidden="true"></i> GPU</p>
                                                        </div>
                                                        <div class="col">
                                                        <p class="text-right">16.56 cm </p>
                                                        </div>
                                                    </div>
                                                    <div class="row no-gutters">
                                                        <div class="col">
                                                        <p class="text-left"><i class="fas fa-circle" aria-hidden="true"></i> Display Type</p>
                                                        </div>
                                                        <div class="col">
                                                        <p class="text-right">Gorilla glass </p>
                                                        </div>
                                                    </div>
                                                    <div class="row no-gutters">
                                                        <div class="col">
                                                        <p class="text-left"><i class="fas fa-circle" aria-hidden="true"></i> Display Color</p>
                                                        </div>
                                                        <div class="col">
                                                        <p class="text-right">Black </p>
                                                        <p class="text-right viwall">All Details <i class="fas fa-chevron-right" aria-hidden="true"></i></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="warranty text-left">
                                                <div class="iconholder">
                                                    <div class="icon">
                                                        <img src="image/medal.svg"/>
                                                    </div>
                                                    <p class="wrtybox"><span>Warranty</span></p>
                                                    <p class="stext">Seller Warranty of 6 month provided by <br/>CART-N-YOU PVT.LTD</p>
                                                </div>
                                            </div>
                                            <div class="rating_review text-left">
                                                <div class="row no-gutters">
                                                    <div class="col">
                                                        <div class="ratep">
                                                            <h4><span class="ponit">4.2</span><span class="pt">/5</span></h4>
                                                            <img src="image/rating/r4.svg" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <p class="rightrate"><span class="rate">85 Rating </span>| <span class="rate">42 Reviews</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="reviewrating">
                                                <div class="row no-gutters">
                                                    <div class="col">
                                                        <div class="user-review">
                                                            <div class="userimg d-flex">
                                                                <div class="imgbox">
                                                                    <div class="blank_user">
                                                                        <span class="username">N</span>
                                                                    </div>
                                                                    <div class="tolrate">
                                                                        <span class="pp"><a href='#' class='star'>★</a> 4</span>
                                                                    </div>
                                                                </div>
                                                                <div class="imgbox">
                                                                    <div class="blank_user">
                                                                        <img src="image/rating/img1.jpg" alt=""/>
                                                                    </div>
                                                                    <div class="tolrate">
                                                                        <span class="pp"><a href='#' class='star'>★</a> 4</span>
                                                                    </div>
                                                                </div>
                                                                <div class="imgbox">
                                                                    <div class="blank_user">
                                                                        <img src="image/rating/img_avatar.png" alt=""/>
                                                                    </div>
                                                                    <div class="tolrate">
                                                                        <span class="pp mediumrate"><a href='#' class='star'>★</a> 3</span>
                                                                    </div>
                                                                </div>
                                                                <div class="imgbox">
                                                                    <div class="blank_user">
                                                                        <img src="image/rating/img2.jpg" alt=""/>
                                                                    </div>
                                                                    <div class="tolrate">
                                                                        <span class="pp lowrate"><a href='#' class='star'>★</a> 3</span>
                                                                    </div>
                                                                </div>
                                                                <div class="imgbox">
                                                                    <div class="blank_user">
                                                                        <img src="image/rating/img1.jpg" alt=""/>
                                                                    </div>
                                                                    <div class="tolrate">
                                                                        <span class="pp"><a href='#' class='star'>★</a> 4</span>
                                                                    </div>
                                                                </div>
                                                                <div class="imgbox">
                                                                    <div class="blank_user">
                                                                        <img src="image/rating/img1.jpg" alt=""/>
                                                                    </div>
                                                                    <div class="tolrate">
                                                                        <span class="pp"><a href='#' class='star'>★</a> 4</span>
                                                                    </div>
                                                                </div>
                                                                <div class="imgbox">
                                                                    <div class="blank_user">
                                                                        <span class="username">N</span>
                                                                    </div>
                                                                    <div class="tolrate">
                                                                        <span class="pp"><a href='#' class='star'>★</a> 4</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="ratingview">
                                                                <div class="top d-flex">
                                                                    <p class="text-left"><img src="image/rating/r4.svg"/> <span class="fr">4.0</span> </p>
                                                                    <p class="float-right">10-Dec-2019 </p>
                                                                </div>
                                                                <div class="detail text-left">
                                                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                                                                </div>
                                                                <div class="productimg text-left">
                                                                    <div class="imgbox d-flex">
                                                                        <img src="image/rating/pview.jpg" alt=""/>
                                                                        <img src="image/rating/pview1.jpg" alt=""/>
                                                                        <img src="image/rating/pview2.jpg" alt=""/>
                                                                        <img src="image/rating/pview.jpg" alt=""/>
                                                                        <img src="image/rating/pview1.jpg" alt=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="namelike">
                                                                    <p class="text-left">Neeraj Sharma</p>
                                                                    <div class="likedilike text-right d-flex">
                                                                        <p class="like"><i class="far fa-thumbs-up"></i> 44</p>
                                                                        <p class="dislike"><i class="far fa-thumbs-down"></i> 44</p>
                                                                    </div>
                                                                </div>
                                                                <div class="ellipsis">
                                                                    <span><i class="fas fa-ellipsis-v"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="specification">
                                                <h3 class="text-left">Seller Information</h3>
                                                <div class="sdetails text-left">
                                                    <div class="row no-gutters">
                                                        <div class="col">
                                                            <p>Sold By</p>
                                                            <p class="text-left"> DIGIBUFF INDIA</p>
                                                            <p>Gurgao, Haryana</p>
                                                        </div>
                                                        <div class="col flex-end text-right">
                                                            <p class="showbtn "> About Seller  <i class="fas fa-chevron-right" aria-hidden="true"></i></p>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                         {/* Category X */}
                        <div class="flashsale">
                            <div class="row no-gutters">
                                <div class="col">
                                    <div class="buttombanner"> <img src="image/header/banner_buttom.png" class="img-fluid"/> </div>
                                </div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col">
                                    <div class="heing">
                                        <h2>Related Product</h2>
                                    </div>
                                    <div class="flashslder">
                                        <div class="swiper-flash">
                                            <div class="swiper-wrapper">
                                                <div class="swiper-slide">
                                                    <div class="flasebox">
                                                        <img src="image/speaker/img1.png" class="img-fluid"/>
                                                        <div class="txt">
                                                            <p class="productn">Realme Mobile Ram 4GB, 64GB, 660 Processer...</p>
                                                            <div class="price d-flex float-left">
                                                                <p class="m-price"><i class="fas fa-rupee-sign"></i> 599</p>
                                                                <span class="full-p"><i class="fas fa-rupee-sign"></i> 899</span>
                                                                <span class="offp">50% off</span>
                                                            </div>
                                                            <div class="rateing text-right">
                                                                {/* <!--  <p class="rate"><a href="#" class="star">★ 4.2</a></p> --> */}
                                                                <p class="rate"><a href="#" class="star">★ 4.2</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="flasebox">
                                                        <img src="image/speaker/img2.png" class="img-fluid" />
                                                        <div class="txt">
                                                            <p class="productn">Realme Mobile Ram 4GB, 64GB, 660 Processer...</p>
                                                            <div class="price d-flex float-left">
                                                                <p class="m-price"><i class="fas fa-rupee-sign"></i> 599</p>
                                                                <span class="full-p"><i class="fas fa-rupee-sign"></i> 899</span>
                                                                <span class="offp">50% off</span>
                                                            </div>
                                                            <div class="rateing text-right">
                                                                <p class="rate"><a href="#" class="star">★ 4.2</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="flasebox">
                                                        <img src="image/speaker/img3.png" class="img-fluid"/>
                                                        <div class="txt">
                                                        <p class="productn">Realme Mobile Ram 4GB, 64GB, 660 Processer...</p>
                                                        <div class="price d-flex float-left">
                                                            <p class="m-price"><i class="fas fa-rupee-sign"></i> 599</p>
                                                            <span class="full-p"><i class="fas fa-rupee-sign"></i> 899</span>
                                                            <span class="offp">50% off</span>
                                                        </div>
                                                        <div class="rateing text-right">
                                                            <p class="rate"><a href="#" class="star">★ 4.2</a></p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="flasebox">
                                                        <img src="image/speaker/img2.png" class="img-fluid"/>
                                                        <div class="txt">
                                                        <p class="productn">Realme Mobile Ram 4GB, 64GB, 660 Processer...</p>
                                                        <div class="price d-flex float-left">
                                                            <p class="m-price"><i class="fas fa-rupee-sign"></i> 599</p>
                                                            <span class="full-p"><i class="fas fa-rupee-sign"></i> 899</span>
                                                            <span class="offp">50% off</span>
                                                        </div>
                                                        <div class="rateing text-right">
                                                            <p class="rate"><a href="#" class="star">★ 4.2</a></p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col">
                                <div class="viewbtn">
                                    <a href="#" class="btn">View All</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Category X--> */}




                        <footer>
                            <div class="collapsemoreabout">
                                <div class="row no-gutters">
                                    <div class="col-12">
                                        {/* <!-- <p class="heading">More About Us</p> --> */}
                                        <div class="accordion" id="accordionExample">
                                            <div class="card">
                                                <div id="headingOne">
                                                <h2 class="mb-0">
                                                <button class="btn btn-link clps" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <span class="heading">More About Us <br/><i class="fas fa-chevron-down"></i></span>
                                                <span></span>
                                                </button>
                                                </h2>
                                                </div>
                                            </div>
                                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="row no-gutters">
                                                    <div class="col-12">
                                                        <div class="footeraria">
                                                            <div class="company">
                                                                <ul><h3>Company </h3>
                                                                <li><a href="#">About Us </a></li>
                                                                <li><a href="#">We're Hiring  </a></li>
                                                                <li><a href="#">Terms and Condition</a></li>
                                                                <li><a href="#">Privacy Policy </a></li>
                                                                <li><a href="#">Blog </a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="social">
                                                                <ul>
                                                                <h3 class="mb-1">Social Media </h3>
                                                                <li><a href=""><img src="image/footer/fb.png"/> </a></li>
                                                                <li><a href=""><img src="image/footer/twit.png"/> </a></li>
                                                                <li><a href=""><img src="image/footer/insta.png"/> </a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="company">
                                                                <ul><h3>Download Our App </h3>
                                                                <li><a href="#">Apple </a></li>
                                                                <li><a href="#">PlayStore </a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="company">
                                                                <ul><h3>Mobile</h3>
                                                                <li><a href="#">New Phones </a></li>
                                                                <li><a href="#">Renewed Phone </a></li>
                                                                <li><a href="#">Open Box Phones </a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="company">
                                                                <ul><h3>Tablets</h3>
                                                                <li><a href="#">Calling Tablets</a></li>
                                                                <li><a href="#"> Wifi Tablets</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="company">
                                                                <ul><h3>Accessories</h3>
                                                                <li><a href="#">Mobile</a></li>
                                                                <li><a href="#">Cases & Covers</a></li>
                                                                <li><a href="#">Powerbank </a></li>
                                                                <li><a href="#">Smart Watch</a></li>
                                                                <li><a href="#">Data Cables</a></li>
                                                                <br/>
                                                                <li><a href="#">Headphones & Headset</a></li>
                                                                <li><a href="#">Chargers</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="company">
                                                                <ul><h3>Speaker</h3>
                                                                <li><a href="#">Bluetooth/Wireless </a></li>
                                                                <li><a href="#">Wired Speaker</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="company">
                                                                <p>100% Secure Payment Through PayU Money</p>
                                                                <img src="image/footer/method.png" class="img-fluid payment"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>


                        <div class="stckyfooter">
                            <div>
                            <ul class="d-flex justify-content-center">
                                <li><span class="wp"><i class="fab fa-whatsapp"></i></span></li>
                                <li><span class="cart"><i class="fas fa-shopping-cart"></i></span></li>
                                <li><span><button type="button" class="btn btn-default"><i class="fas fa-bolt"></i> Buy Now</button> </span></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                            {/* <!-- Main container and section close --> */}
                        
                    

            </div>
            
        </Fragment>
    );
};