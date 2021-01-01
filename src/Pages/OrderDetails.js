import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {RedNavbar} from "../Components/RedNavbar";
import LinearProgress from '@material-ui/core/LinearProgress';

var useStyles = makeStyles({
    root: {
      transformOrigin: "0 1%",
      transition:"2s",
      margin: '0 1rem',
      width: '85%',
    }
  });

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
      backgroundColor:"gainsboro",
    },
    bar: {
      borderRadius: 5,
      backgroundColor: 'green'
    },
  }))(LinearProgress);
  

export const OrderDetails = () => {
    var classes = useStyles();
    function vertical(e){
        var pos = e.target.className;
        if(pos=="bx bxs-chevron-right"){
            document.getElementsByClassName("sellerlocation")[1].classList.add("progress-bar-div-height")
            e.target.className = "bx bxs-chevron-down"
            document.getElementById("progress-bar-div").classList.add("progress-bar-transition")
            document.getElementById("order-placed").classList.add("order-placed-move")
            document.getElementById("order-shipped").classList.add("order-shipped-move")
            document.getElementById("out-for-delivery").classList.add("out-for-delivery-move")
            document.getElementById("delivered").classList.add("delivered-move")
            var x = document.getElementsByClassName("order-status-details")
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "block";
            }
        }
        else{
            document.getElementsByClassName("sellerlocation")[1].classList.remove("progress-bar-div-height")
            e.target.className = "bx bxs-chevron-right"
            document.getElementById("progress-bar-div").classList.remove("progress-bar-transition")
            document.getElementById("order-placed").classList.remove("order-placed-move")
            document.getElementById("order-shipped").classList.remove("order-shipped-move")
            document.getElementById("out-for-delivery").classList.remove("out-for-delivery-move")
            document.getElementById("delivered").classList.remove("delivered-move")
            var x = document.getElementsByClassName("order-status-details")
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
        }
    }
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '110vh', backgroundColor: '#f5f5f5'}}>
                    <RedNavbar navbar="Order"></RedNavbar>
                    <section class="bodypanelmian aboutseller">
                        <div class="sellerlocation" style={{backgroundColor:"white"}}>
                            <p style={{color:"grey",fontSize:"9px"}}><span style={{float:"left"}}>Order ID: #12345678910221321</span> <span style={{float:"right"}}>Placed Date: 15 March 2020</span></p>
                            <br/>
                            <div class="row">
                                <div className="col-3">
                                    <img src='/image/RealmeX50Pro.jpg' className='img-fluid' alt='img1' />
                                </div>
                                <div className="col-9" style={{textAlign: 'left'}}>
                                    <p style={{lineHeight:"1rem",marginBottom:"0.4rem"}}>Realme X50 Pro 5G (Rust Red, 256GB)<br></br> (12GB RAM)</p>
                                    <p><span style={{float:"left"}}><i className='fas fa-rupee-sign' /> 599</span><span style={{float:"right",color:"grey"}}>Seller : Cartnyou</span></p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="bodypanelmian aboutseller text-left" style={{ marginBottom: '20%', paddingBottom: '10px' }}>
                        <div className="sellerlocation" style={{backgroundColor: '#fff',height:"fit-content"}}>
                            <div id="progress-bar-div" className={classes.root}>
                                <BorderLinearProgress variant="determinate" value={70} color='secondary' />
                                <div class="row" style={{position:"relative",top:"-1rem",width:"127%"}}>
                                    <div class="col-3">
                                        <div style={{height:"1.4rem",width:"1.4rem",borderRadius:"50%",backgroundColor:"green"}}></div>
                                    </div>
                                    <div class="col-3">
                                        <div style={{height:"1.4rem",width:"1.4rem",borderRadius:"50%",backgroundColor:"green"}}></div>
                                    </div>
                                    <div class="col-3">
                                        <div style={{height:"1.4rem",width:"1.4rem",borderRadius:"50%",backgroundColor:"green"}}></div>
                                    </div>
                                    <div class="col-3">
                                        <div style={{height:"1.4rem",width:"1.4rem",borderRadius:"50%",backgroundColor:"green"}}></div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-3" id="order-placed" style={{marginTop: '0.3rem', lineHeight: '0.8rem'}}>Order Placed
                                                <div className="order-status-details">
                                                    <p>Your Order has been placed</p>
                                                    <p>Thu, 26th Nov' 20 - 02:07pm</p>
                                                </div>
                                            </div>
                                            <div className="col-3" id="order-shipped" style={{marginTop: '0.3rem', lineHeight: '0.8rem'}}>Shipped</div>
                                            <div className="col-3" id="out-for-delivery" style={{marginTop: '0.3rem', lineHeight: '0.8rem'}}>Out for Delivery</div>
                                            <div className="col-3" id="delivered" style={{marginTop: '0.3rem', lineHeight: '0.8rem'}}>Delivered</div>
                                        </div>
                                        <div className="row" style={{marginTop: '0.3rem'}}>
                                            <div className="col-8">
                                                <span style={{color: 'lightgray'}}>Expected Delivery : 20 March 2020</span>
                                            </div>
                                            <div className="col-4"></div>
                                        </div>
                                    </div>

                                </p>
                            <span onClick={vertical} style={{float:"right",position: "relative",top: "-0.6rem",fontSize: "12px",cursor:"pointer"}}><i className='bx bxs-chevron-right'></i></span>
                        </div>

                        <div class="sellerlocation" style={{backgroundColor:"white",height:"2.8rem"}}>
                            <p><span style={{float:"left"}}>Cancel Order</span><span style={{float:"right"}}><i class='bx bxs-chevron-right'></i></span></p>
                        </div>
                        <div class="sellerlocation" style={{backgroundColor:"white",height:"2.8rem"}}>
                            <p><span style={{float:"left"}}>Support Center</span><span style={{float:"right"}}><i class='bx bxs-chevron-right'></i></span></p>
                        </div>
                        <div className='sellerlocation' style={{backgroundColor: '#fff'}}>
                            <p style={{ color: 'grey'}}>
                            Shipping Address:
                            </p>
                            <hr style={{ margin: '1% 0' }} />
                            <h3 style={{marginTop: '0.4rem'}}>
                            <b>Neeraj Sharma <span className='text-right' style={{ backgroundColor: 'lightgray', padding: '2px 10px', fontSize: '10px' }}>Office</span></b>
                            </h3>
                            <p style={{margin: '0'}}>
                                36476  PfannerStill, Lokhandwala
                            </p>
                            <p style={{margin: '-1% 0'}}>
                                Charminar 68761
                            </p>
                            <p style={{margin: '0'}}>
                                Delhi - 110045
                            </p>
                            <p>
                                Phone No. : +91-9123-4101-01
                            </p>
                        </div>
                        <div className='sellerlocation' style={{backgroundColor: '#fff'}}>
                            <p style={{ color: 'grey' }}>
                            Price Details
                            </p>
                            <hr style={{ margin: '1% 0' }} />
                            <p>
                                MRP
                                <span className='text-right' style={{ float: 'right' }}>&#8377; 5000</span>
                            </p>

                            <p>
                                Item Discount
                                <span className='text-right' style={{ float: 'right' }}> (&minus;) &#8377; 500</span>
                            </p>

                            <p>
                                Card Payment
                                <span className='text-right' style={{ float: 'right' }}> &#8377; 4500</span>
                            </p>
                            <p>
                                Shipping Cost
                                <span className='text-right' style={{ float: 'right'}}> 
                                    Free Shipping 
                                </span>
                            </p>
                            <hr style={{ margin: '2% 0' }} />
                            <p>
                            Total
                                <span className='text-right' style={{ float: 'right' }}> &#8377; 4500</span>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}