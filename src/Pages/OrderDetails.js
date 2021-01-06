import React, { Fragment, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {RedNavbar} from "../Components/RedNavbar";
import LinearProgress from '@material-ui/core/LinearProgress';

var useStyles = makeStyles({
    root: {
      transformOrigin: "0 1%",
      transition:"1s",
      margin: '0 1rem',
      width: '90%',
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
    const [progress, setProgress] = useState(0);

    var classes = useStyles();
    function vertical(e){
        var pos = e.target.className;
        if(pos=="bx bxs-chevron-right"){
            document.getElementsByClassName("sellerlocation")[1].classList.add("progress-bar-div-height")
            e.target.className = "bx bxs-chevron-up"
            document.getElementById("progress-bar-div").classList.add("progress-bar-transition")
            document.getElementById("collapse-content").style.display = "none"
            document.getElementById("expand-content").style.display = "block"
        }
        else{
            document.getElementsByClassName("sellerlocation")[1].classList.remove("progress-bar-div-height")
            e.target.className = "bx bxs-chevron-right"
            document.getElementById("progress-bar-div").classList.remove("progress-bar-transition")
            document.getElementById("collapse-content").style.display = "block"
            document.getElementById("expand-content").style.display = "none"
        }
    }

    function Progress(prog){
        if(prog==0){
            document.getElementById("order-placed-circle").style.backgroundColor = "green";
            document.getElementById("order-shipped-circle").style.backgroundColor = "grey";
            document.getElementById("out-for-delivery-circle").style.backgroundColor = "grey";
            document.getElementById("delivered-circle").style.backgroundColor = "grey";
        }
        else if(prog>=33 && prog<40){
            document.getElementById("order-placed-circle").style.backgroundColor = "green";
            document.getElementById("order-shipped-circle").style.backgroundColor = "green";
            document.getElementById("out-for-delivery-circle").style.backgroundColor = "grey";
            document.getElementById("delivered-circle").style.backgroundColor = "grey";
        }
        else if(prog>=65 &&prog<72){
            document.getElementById("order-placed-circle").style.backgroundColor = "green";
            document.getElementById("order-shipped-circle").style.backgroundColor = "green";
            document.getElementById("out-for-delivery-circle").style.backgroundColor = "green";
            document.getElementById("delivered-circle").style.backgroundColor = "grey";
        }
        else if(prog==100){
            document.getElementById("order-placed-circle").style.backgroundColor = "green";
            document.getElementById("order-shipped-circle").style.backgroundColor = "green";
            document.getElementById("out-for-delivery-circle").style.backgroundColor = "green";
            document.getElementById("delivered-circle").style.backgroundColor = "green";
        }
    }

    function colorChange(e){
        var id = e.target.id.split("-")[1];
        for(var i=4;i>=0;i--){
            if(i>=id){
                e.target.parentElement.childNodes[i].style.color="gold";
            }
            else{
                e.target.parentElement.childNodes[i].style.color="gainsboro";
            }
        }
        
    }


    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{backgroundColor: '#f5f5f5'}}>
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
                    <section class="bodypanelmian aboutseller text-left" style={{ marginBottom: '0%', paddingBottom: '10px' }}>
                        <div className="sellerlocation" style={{backgroundColor: '#fff',height:"fit-content",height:"7rem",transition:"height 1s"}}>
                            <div id="progress-bar-div" className={classes.root} >
                                <BorderLinearProgress variant="determinate" value={progress} color='secondary' />
                                <div class="row" style={{position:"relative",top:"-1rem",width:"110%"}}>
                                    <div class="col-3">
                                        <div id="order-placed-circle" onClick={() => {Progress(0);setProgress(0); }} style={{height:"1.4rem",width:"1.4rem",borderRadius:"50%",backgroundColor:"green"}}></div>
                                    </div>
                                    <div class="col-3">
                                        <div id="order-shipped-circle" onClick={() => {Progress(35); setProgress(35);}} style={{height:"1.4rem",width:"1.4rem",borderRadius:"50%",backgroundColor:"gainsboro",marginLeft:"0.5rem"}}></div>
                                    </div>
                                    <div class="col-3">
                                        <div id="out-for-delivery-circle" onClick={() => {Progress(68);setProgress(68); }} style={{height:"1.4rem",width:"1.4rem",borderRadius:"50%",backgroundColor:"gainsboro",margin:"auto"}}></div>
                                    </div>
                                    <div class="col-3">
                                        <div id="delivered-circle" onClick={() => {Progress(100);setProgress(100);}} style={{height:"1.4rem",width:"1.4rem",borderRadius:"50%",backgroundColor:"gainsboro",float:"right"}}></div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                <div className="container" id="collapse-content">
                                    <div className="row" style={{padding: '0 0%'}}>
                                        <div className="col-3" id="order-placed" style={{marginTop: '0.3rem', lineHeight: '0.8rem',  padding: '0rem 0.5rem', marginLeft: '0.5rem'}}>Order Placed</div>
                                        <div className="col-2" id="order-shipped" style={{marginTop: '0.3rem', lineHeight: '0.8rem',  padding: '0rem', textAlign: 'center'}}>Shipped</div>
                                        <div className="col-4" id="out-for-delivery" style={{marginTop: '0.3rem', lineHeight: '0.8rem',  padding: '0rem', textAlign: 'center'}}>Out for Delivery</div>
                                        <div className="col-2" id="delivered" style={{marginTop: '0.3rem', lineHeight: '0.8rem',  padding: '0rem', textAlign: 'right'}}>Delivered</div>
                                    </div>
                                    <div className="row" style={{marginTop: '0.3rem'}}>
                                        <div className="col-8">
                                            <span style={{color: 'lightgray'}}>Expected Delivery : 20 March 2020</span>
                                        </div>
                                        <div className="col-4"></div>
                                    </div>
                                </div>
                                <div className="container" id="expand-content" style={{display: 'none', margin: '-2rem 2.5rem'}}>
                                    <div className="row" style={{marginBottom: '0.8rem'}}>
                                        <div className="col-8">
                                            <p style={{fontSize: '12px'}}>Order Placed</p>
                                            <p style={{fontSize: '11px'}}>Your Order has been placed</p>
                                            <p style={{fontSize: '10px', color: 'gray'}}>Thu, 26th Nov'20 - 2:07pm</p>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: '0.8rem'}}>
                                        <div className="col-8">
                                            <p style={{fontSize: '12px'}}>Shipped</p>
                                            <p style={{fontSize: '11px'}}>Seller has processed your order</p>
                                            <p style={{fontSize: '10px', color: 'gray', marginBottom: '0.5rem'}}>Thu, 26th Nov'20 - 2:07pm</p>
                                            
                                            <p style={{fontSize: '11px'}}>Your item has been picked by the courier partner</p>
                                            <p style={{fontSize: '10px', color: 'gray'}}>Thu, 26th Nov'20 - 2:07pm</p>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: '0.8rem'}}>
                                        <div className="col-8">
                                            <p style={{fontSize: '12px'}}>Out For Delivery</p>
                                            <p style={{fontSize: '11px'}}>E-kart Logistics</p>
                                            <p style={{fontSize: '10px', color: 'gray'}}>Thu, 26th Nov'20 - 2:07pm</p>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: '0.8rem'}}>
                                        <div className="col-8">
                                            <p style={{fontSize: '12px'}}>Delivered</p>
                                            <p style={{fontSize: '11px'}}>Your Order has been delivered</p>
                                            <p style={{fontSize: '10px', color: 'gray'}}>Thu, 26th Nov'20 - 2:07pm</p>
                                        </div>
                                    </div>
                                </div>
                            </p>
                            <span onClick={vertical} style={{float:"right",position: "relative",top: "-0.6rem",fontSize: "12px",cursor:"pointer"}}><i className='bx bxs-chevron-right'></i></span>
                        </div>

                        <div class="sellerlocation" style={{backgroundColor:"white"}}>
                            <div className="row" >
                                <div class Name="col-6" style={{textAlign: 'left'}}>
                                <i class='bx bxs-star' id="gold-0" onClick={colorChange} style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                <i class='bx bxs-star' id="gold-1" onClick={colorChange} style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                <i class='bx bxs-star' id="gold-2" onClick={colorChange} style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                <i class='bx bxs-star' id="gold-3" onClick={colorChange} style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                <i class='bx bxs-star' id="gold-3" onClick={colorChange} style={{fontSize: '1.5rem',color:"gainsboro"}}></i>
                                </div>
                                <div className="col-6" style={{textAlign: 'right'}}>
                                <span style={{color: '#c2172e', cursor: 'pointer', fontSize: '12px'}}><b>Write a Review</b></span>
                                </div>
                            </div>
                        </div>
                        <div class="sellerlocation" style={{backgroundColor:"white",height:"2.8rem"}}>
                            <p><span style={{float:"left",fontSize:"12px"}}><i style={{color:"#c2172e"}} class='bx bxs-file'></i> Download Invoice</span><span style={{float:"right"}}><i class='bx bxs-chevron-right'></i></span></p>
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