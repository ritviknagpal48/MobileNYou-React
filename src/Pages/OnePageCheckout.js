/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
import {
    fade,
    ThemeProvider,
    withStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#c2172e',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'gainsboro',
        },
        '&:hover fieldset': {
          borderColor: 'gainsboro',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#c2172e',
        },
      },
    },
  })(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1.5),
            width: '90%',
        },
    },
}));

export const OnePageCheckout = () => {
    const classes = useStyles();

    return (

        <Fragment>
            <div class="badydiv">
                <div class="universalDiv">
                    <div class="container" style={{ backgroundColor: "white" }}>
                        <Navbar></Navbar>
                        <div class="container" style={{ padding: "12px" }}>
                            <div class="row" style={{ padding: "10px;" }}>
                                <div class="col-6" style={{ display: "flex", justifyContent: "center" }}>
                                    <button type="button" class="btn btn-light" style={{ backgroundColor: "white", fontSize: "16px", width: "10rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row",boxShadow: "0px 0px 4px 1px gainsboro" }}><i style={{ float: "left", color: "blue", fontSize: "24px" }} class='bx bxl-facebook-circle' ></i>Facebook</button>
                                </div>
                                <div class="col-6" style={{ display: "flex", justifyContent: "center" }}>
                                    <button type="button" class="btn btn-light" style={{ backgroundColor: "white", fontSize: "16px", width: "10rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row",boxShadow: "0px 0px 4px 1px gainsboro" }}><i style={{ float: "left", color: "red", fontSize: "24px" }} class='bx bxl-google'></i>Google</button>
                                </div>
                            </div>
                        </div>

                        <div class="container" id="cart-items-dropdown-menu" style={{ backgroundColor: "white", width: "93%", height: "2.5rem", borderRadius: "2%",boxShadow: "0px 0px 4px 1px gainsboro" }}>
                            <span style={{ float: "left", margin: "0 1rem", padding: "0.5rem 0", fontSize: "15px" }}>View items in cart</span>
                            <i id="cart-items-dropdown-icon" style={{ float: "left", fontSize: "23px", padding: "0.5rem 0", marginLeft: "-0.7rem" }} class='bx bx-chevron-down'></i>
                            <span style={{ float: "right", margin: "0 1rem", padding: "0.5rem 0", color: "red", fontSize: "15px" }}>₹5899</span>
                        </div>
                        <div className="bodypanelmian aboutseller text-left" id="cart-items-dropdown-content" style={{ backgroundColor: "white", width: "93%", margin: "-1rem auto 0 auto", display: "none",boxShadow: "0px 5px 4px 1px gainsboro" }}>

                            <div className='sellerlocation' style={{ padding: "none", margin: "none", boxShadow: "none" }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="/image/RealmeX50Pro.jpg" alt="Product Image"></img>
                                        </div>
                                        <div className="col-7" style={{
                                            marginTop: "3%",
                                        }}>
                                            <h3>Realme X50 Pro 5G(Rust Red, 256GB) (12GB RAM)</h3>
                                            <h6 style={{
                                                color: "gray",
                                                fontSize: "10px",
                                            }}>4GB 128GB</h6>
                                        </div>
                                        <div className="col-2">
                                        </div>
                                    </div>
                                </div>
                                <div className="container" style={{ marginTop: "5%" }}>
                                    <div className="row">
                                        <div className="col-3">

                                            <h5 style={{
                                                fontSize: "15px",
                                                color: "lightgray",
                                            }}>Quantity</h5>
                                        </div>
                                        <div className="col-4">
                                            <select id="cars" name="cars">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                        <div className="col-5"></div>
                                    </div>
                                </div>
                                <div className="container" style={{ marginTop: "5%" }}>
                                    <div className="row">
                                        <div className="col-3">
                                            <h5 style={{
                                                fontSize: "15px",
                                                color: "gray",
                                            }}>Condition</h5>
                                        </div>
                                        <div className="col-4">
                                            <button type="button" style={{
                                                fontSize: "12px",
                                                backgroundColor: "darkgreen",
                                                color: "white",
                                                borderRadius: "2px",
                                                padding: "5px",
                                                width: "96px"
                                            }} class="btn">Renewed</button>
                                        </div>
                                        <div className="col-5"></div>
                                    </div>
                                </div>
                                <div className="container" style={{ marginTop: "5%" }}>
                                    <div className="row">
                                        <div className="col-2">
                                            <h5><b><span>&#8377;</span>5899</b></h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 style={{
                                                marginTop: "7px",
                                                marginLeft: "5px",
                                                color: "gray",
                                                fontSize: "12px"
                                            }}><strike><span>&#8377;</span>8999</strike></h5>
                                        </div>
                                        <div className="col-3">
                                            <h6 style={{ color: "red", fontSize: "12px", marginTop: "7px" }}>50% OFF</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: "rgba(255, 0, 0, 0.05)", border: "dotted red 1px", borderRadius: "5px", fontSize: "16px", margin: "4%", height: "2.5rem", padding: "0.3rem 0" }}>
                            Get <b style={{ color: "rgba(167, 13, 13, 0.8)" }}>100Rs</b> Off on Prepaid Order
                    </div>
                        <section class="bodypanelmian" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                            <section className="aboutseller">
                                <div className="sellerlocation" style={{ backgroundColor: "white" }}>
                                    <p style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column'
                                    }}>Enter Your Shipping Address</p>
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Phone No"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                        
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Email"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                         
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Full Name"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                         
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Address"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                         
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Pin code"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />         
                                                        
                                    </form>
                                    <div class="container" style={{ width: '93%' }}>
                                        <div class="row" style={{marginTop:"10px", marginBottom:"10px"}}>
                                            <div class="col-6">
                                                <CssTextField
                                                className={classes.margin}
                                                required="true"
                                                label="Locality"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                                style={{marginRight:"-0.5rem"}}
                                            />                                                
                                        </div>
                                            <div class="col-6">
                                                <CssTextField
                                                className={classes.margin}
                                                required="true"
                                                label="City"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                                style={{marginLeft:"-0.5rem"}}
                                            />                                               
                                         </div>
                                        </div>
                                        <div class="row" style={{marginTop:"10px", marginBottom:"10px"}}>
                                            <div class="col-6">
                                                <CssTextField
                                                    className={classes.margin}
                                                    required="true"
                                                    label="State"
                                                    variant="outlined"
                                                    id="custom-css-outlined-input"
                                                    style={{marginRight:"-0.5rem"}}
                                                />                                                
                                            </div>
                                            <div class="col-6">
                                                <CssTextField
                                                className={classes.margin}
                                                required="true"
                                                label="Landmark"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                                style={{marginLeft:"-0.5rem"}}
                                            />    
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        float: 'left',
                                        textAlign: 'left',
                                        marginTop:"10px", 
                                        marginBottom:"10px" 
                                    }} class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">New Here? Create Password</label>
                                    </div>
                                    <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Password"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                            style={{marginTop:"10px", marginBottom:"20px", width:"90%"}}
                                        />    
                                </div>
                            </section>
                        </section>
                        <section className="bodypanelmian aboutseller text-left">
                            <div className="sellerlocation" style={{ backgroundColor: "white" }}>
                                <h5 style={{ textAlign: "center" }}>Payment Option</h5>
                                <hr></hr>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-1">
                                            <input class="" type="radio" name="exampleRadios" value="Online" />
                                        </div>
                                        <div className="col-10">
                                            <h5 style={{ fontSize: "12px", color: "gray" }}>Pay via With Credit or Debit Card, Netbanking, Wallet, UPI, EMI</h5>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "rgba(255, 0, 0, 0.05)", border: "dotted red 1px", borderRadius: "5px", fontSize: "16px", margin: "4%", height: "2.5rem", padding: "0.3rem 0", textAlign: "center" }}>
                                    Get <b style={{ color: "rgba(167, 13, 13, 0.8)" }}>100Rs</b> Off on Prepaid Order
                                </div>
                                <div className="container">
                                    <div className="row" style={{ marginLeft: "5px" }}>
                                        <div className="col">
                                            <div className="row">
                                                <i class='bx bx-credit-card' style={{ color: "#c2172e", fontSize: "24px" }}></i>
                                            </div>
                                            <div className="row">
                                                <h6 style={{ fontSize: "11px" }}>Card</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <i class='bx bxs-bank' style={{ color: "#c2172e", fontSize: "24px" }}></i>
                                            </div>
                                            <div className="row">
                                                <h6 style={{ fontSize: "11px" }}>Net<br></br>Banking</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <i class='bx bxs-calculator' style={{ color: "#c2172e", fontSize: "24px" }}></i>
                                            </div>
                                            <div className="row">
                                                <h6 style={{ fontSize: "11px" }}>EMI</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <i class='bx bxs-right-arrow' style={{ color: "#c2172e", fontSize: "24px" }}></i>
                                            </div>
                                            <div className="row">
                                                <h6 style={{ fontSize: "11px" }}>BHIM<br></br>UPI</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <i class='bx bxs-wallet' style={{ color: "#c2172e", fontSize: "24px" }}></i>
                                            </div>
                                            <div className="row">
                                                <h6 style={{ fontSize: "11px" }}>Wallet</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-1">
                                            <input class="" type="radio" name="exampleRadios" value="Online" />
                                        </div>
                                        <div className="col-10">
                                            <h5 style={{ fontSize: "12px", color: "gray" }}>Cash On Delivery</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h6 style={{ color: "#c2172e", fontSize: "9px" }}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h6>
                                </div>
                            </div>
                        </section>
                        <section className="bodypanelmian aboutseller text-left">
                            <div className="sellerlocation" style={{ backgroundColor: "white" }}>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-8">
                                        <CssTextField
                                            className={classes.margin}
                                            label="Enter Coupon Code"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                            style={{width:"16rem", margin: '0.6rem 0rem'}}
                                            size="small"
                                        />                                            
                                        </div>
                                        <div class="col-4">
                                            <button class="btn btn-outline-danger" style={{
                                                margin: "11% 2%",
                                                float: 'right',
                                                padding: "5px",
                                                width: '80%',
                                                height: '65%'
                                            }}>
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bodypanelmian aboutseller text-left" style={{ marginBottom: '20%', paddingBottom: '10px' }}>
                            <div className='sellerlocation' style={{ backgroundColor: "white" }}>
                                <p style={{ color: 'lightgrey' }}>
                                    Price Details
                        </p>
                                <hr style={{ margin: '1% 0' }} />
                                <p>
                                    Price (9 Items)
                            <span className='text-right' style={{ float: 'right' }}>&#8377; 5000</span>
                                </p>

                                <p>
                                    Shipping Cost
                            <span className='text-right' style={{ float: 'right', color: '#C32D2F' }}> Free Shipping </span>
                                </p>

                                <p>
                                    Discount
                            <span className='text-right' style={{ float: 'right' }}>- &#8377; 5000</span>
                                </p>

                                <p>
                                    Discount
                            <span className='text-right' style={{ float: 'right' }}>- &#8377; 500</span>
                                </p>
                                <hr style={{ margin: '2% 0' }} />
                                <p>
                                    Total
                            <span className='text-right' style={{ float: 'right' }}> &#8377; 4500</span>
                                </p>
                                <hr style={{ margin: '2% 0' }} />
                                <p>
                                    You will save<span className='text-right' style={{ color: '#C32D2F' }}>  &#8377; 4500 </span> in this order
                        </p>
                            </div>
                        </section>
                        <div class="footer" style={{
                            zIndex: "100",
                            position: 'fixed',
                            bottom: '0',
                            width: '576px',
                            backgroundColor: '#ffffff',
                            height: '4.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            boxShadow: '4px -5px 6px rgba(207, 207, 207, 0.5)'
                        }}>
                            <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                        <div style={{
                                            float: 'left',
                                            margin: '0 1rem'
                                        }}>
                                            <p className='left-foot'>Total</p>
                                            <p style={{ color: 'red' }}>₹5899</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <button type="button" class="btn btn-danger right-foot" style={{
                                            float: 'right'
                                        }}>
                                            Continue
                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};