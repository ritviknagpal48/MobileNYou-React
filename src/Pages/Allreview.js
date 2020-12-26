/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { ProgressBar } from 'react-bootstrap';

export const Allreview = () => {

    function dropDown(params) {
        document.getElementById("miniDropdown").classList.toggle("show");
    }
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    return (

        <Fragment>
            <div class="badydiv">
                <div class="universalDiv">
                    <div class="container" style={{ backgroundColor: "white" }}>
                        <Navbar></Navbar>

                    </div>
                    <section class="bodypanelmian">
                        <div class="container">
                            <div class="row no-gutters">
                                <div class="row no-gutters" style={{ width: "100%" }}>
                                    <div class="col-12">
                                        <div class="flashsale">
                                            <div class="rating_review">
                                                <section className="aboutseller">
                                                    <div className="sellerlocation">
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col-5">
                                                                    <div style={{ borderRight: "1px gainsboro solid" }}>
                                                                        <h4><span style={{ color: "green", fontSize: "32px" }}><b>4.2</b></span><span style={{ fontSize: "18px", color: "gray" }}>/5</span></h4>
                                                                        <img src="image/rating/r4.svg" alt="" />
                                                                        <h6 style={{ fontSize: "10px" }}>85 Rating | 42 Reviews</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="row">
                                                                        <h6 style={{ fontSize: "10px" }}><b>5</b></h6><i style={{ fontSize: "10px", padding: "1px 1px 1px 2px" }} class='bx bxs-star'></i>
                                                                        <ProgressBar now={100} variant={'success'} style={{ width: "75%", margin: "0.2rem", height: "5px", }} />
                                                                        <span style={{ fontSize: "10px", marginTop: "-2px" }}><b>50</b></span>
                                                                    </div>
                                                                    <div className="row">
                                                                        <h6 style={{ fontSize: "10px" }}><b>4</b></h6><i style={{ fontSize: "10px", padding: "1px 1px 1px 2px" }} class='bx bxs-star'></i>
                                                                        <ProgressBar now={40} variant={'success'} style={{ width: "75%", margin: "0.2rem", height: "5px", }} />
                                                                        <span style={{ fontSize: "10px", marginTop: "-2px" }}><b>20</b></span>
                                                                    </div>
                                                                    <div className="row">
                                                                        <h6 style={{ fontSize: "10px" }}><b>3</b></h6><i style={{ fontSize: "10px", padding: "1px 1px 1px 2px" }} class='bx bxs-star'></i>
                                                                        <ProgressBar now={20} variant={'warning'} style={{ width: "75%", margin: "0.2rem", height: "5px", }} />
                                                                        <span style={{ fontSize: "10px", marginTop: "-2px" }}><b>15</b></span>
                                                                    </div>
                                                                    <div className="row">
                                                                        <h6 style={{ fontSize: "10px" }}><b>2</b></h6><i style={{ fontSize: "10px", padding: "1px 1px 1px 2px" }} class='bx bxs-star'></i>
                                                                        <ProgressBar now={10} variant={'danger'} style={{ width: "75%", margin: "0.2rem", height: "5px", }} />
                                                                        <span style={{ fontSize: "10px", marginTop: "-2px" }}><b>8</b></span>
                                                                    </div>
                                                                    <div className="row">
                                                                        <h6 style={{ fontSize: "10px" }}><b>1</b></h6><i style={{ fontSize: "10px", padding: "1px 1px 1px 2px" }} class='bx bxs-star'></i>
                                                                        <ProgressBar now={5} variant={'danger'} style={{ width: "75%", margin: "0.2rem", height: "5px", }} />
                                                                        <span style={{ fontSize: "10px", marginTop: "-2px" }}><b>2</b></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>

                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="reviewrating">
                                                <div class="row no-gutters">
                                                    <div class="col">
                                                        <div class="user-review">
                                                            <div class="userimg d-flex" style={{ overflowY: "hidden" }}>
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
                                                                        <img src="/image/rating/Ellipse 555.jpg" alt="" />
                                                                    </div>
                                                                    <div class="tolrate">
                                                                        <span class="pp"><a href='#' class='star'>★</a> 4</span>
                                                                    </div>
                                                                </div>
                                                                <div class="imgbox">
                                                                    <div class="blank_user">
                                                                        <img src="/image/rating/Ellipse 555 (1).jpg" alt="" />
                                                                    </div>
                                                                    <div class="tolrate">
                                                                        <span class="pp mediumrate"><a href='#' class='star'>★</a> 3</span>
                                                                    </div>
                                                                </div>
                                                                <div class="imgbox">
                                                                    <div class="blank_user">
                                                                        <img src="/image/rating/Ellipse 555.jpg" alt="" />
                                                                    </div>
                                                                    <div class="tolrate">
                                                                        <span class="pp lowrate"><a href='#' class='star'>★</a> 3</span>
                                                                    </div>
                                                                </div>
                                                                <div class="imgbox">
                                                                    <div class="blank_user">
                                                                        <img src="/image/rating/Ellipse 555 (1).jpg" alt="" />
                                                                    </div>
                                                                    <div class="tolrate">
                                                                        <span class="pp"><a href='#' class='star'>★</a> 4</span>
                                                                    </div>
                                                                </div>
                                                                <div class="imgbox">
                                                                    <div class="blank_user">
                                                                        <img src="/image/rating/Ellipse 555.jpg" alt="" />
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
                                                                    <p class="text-left"><img src="image/rating/r4.svg" /> <span class="fr">4.0</span> </p>
                                                                    <p class="float-right">10-Dec-2019 </p>
                                                                </div>
                                                                <div class="detail text-left">
                                                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                                                                </div>
                                                                <div class="productimg text-left">
                                                                    <div class="imgbox d-flex">
                                                                        <img src="image/filter/img1.png" alt="" />
                                                                        <img src="image/filter/img2.png" alt="" />
                                                                        <img src="image/filter/img1.png" alt="" />
                                                                        <img src="image/filter/img2.png" alt="" />
                                                                        <img src="image/filter/img1.png" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div class="namelike">
                                                                    <p class="text-left">Kartikeya Agarwal</p>
                                                                    <div class="likedilike text-right d-flex">
                                                                        <p class="like"><i class="far fa-thumbs-up"></i> 44</p>
                                                                        <p class="dislike"><i class="far fa-thumbs-down"></i> 44</p>
                                                                    </div>
                                                                </div>
                                                                <div class="ellipsis">
                                                                    <span><i class="fas fa-ellipsis-v dropbtn" onClick={dropDown}></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-6"></div>
                                                                    <div className="col-6">
                                                                        <div id="miniDropdown" class="dropdown-content">
                                                                            <a href="#report"><i class='bx bxs-error' style={{color:"red", marginRight:"5px"}}></i>Report Abuse</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="ratingview">
                                                                <div class="top d-flex">
                                                                    <p class="text-left"><img src="image/rating/r4.svg" /> <span class="fr">1.0</span> </p>
                                                                    <p class="float-right">10-Dec-2019 </p>
                                                                </div>
                                                                <div class="detail text-left">
                                                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                                                                </div>
                                                                <div class="namelike">
                                                                    <p class="text-left">Nikhil Gupta</p>
                                                                    <div class="likedilike text-right d-flex">
                                                                        <p class="like"><i class="far fa-thumbs-up"></i> 44</p>
                                                                        <p class="dislike"><i class="far fa-thumbs-down"></i> 10</p>
                                                                    </div>
                                                                </div>
                                                                <div class="ellipsis">
                                                                    <span><i class="fas fa-ellipsis-v"></i></span>
                                                                </div>
                                                            </div>
                                                            <div class="ratingview">
                                                                <div class="top d-flex">
                                                                    <p class="text-left"><img src="image/rating/r4.svg" /> <span class="fr">2.0</span> </p>
                                                                    <p class="float-right">10-Dec-2019 </p>
                                                                </div>
                                                                <div class="detail text-left">
                                                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                                                                </div>
                                                                <div class="namelike">
                                                                    <p class="text-left">Shreyans Jain</p>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* <!-- Main container and section close --> */}



            </div>

        </Fragment>
    );
};