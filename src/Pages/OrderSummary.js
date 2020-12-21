import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import styles from '../Components/OrderSummary Page/style.module.css';

export const OrderSummary = () => {
  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv universal-Div'>
          <div class='container x-container'>
            <Navbar></Navbar>
            <section className="bodypanelmian aboutseller text-left">
            <div className='sellerlocation'>
                  <div className="container">
                    <div className="row">
                        <div className="col-3">
                        <img src="/image/RealmeX50Pro.jpg"></img>
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
                  <div className="container" style={{marginTop:"5%"}}>
                    <div className="row">
                      <div className="col-3">
                      <h5 style={{
                        fontSize:"15px",
                        color:"lightgray",
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
                  <div className="container" style={{marginTop:"5%"}}>
                    <div className="row">
                      <div className="col-3">
                      <h5 style={{
                        fontSize:"15px",
                        color:"gray",
                      }}>Condition</h5>
                      </div>
                      <div className="col-4">
                      <button type="button" style={{
                        fontSize:"12px",
                        backgroundColor: "darkgreen",
                        color: "white",
                        borderRadius: "2px",
                        padding: "5px",
                        width:"96px"
                      }} class="btn">Renewed</button>
                      </div>
                      <div className="col-5"></div>
                    </div>
                  </div>
                  <div className="container" style={{marginTop:"5%"}}>
                    <div className="row">
                      <div className="col-2">
                        <h5><b><span>&#8377;</span>5899</b></h5>
                      </div>
                      <div className="col-2">
                        <h5 style={{
                          marginTop:"7px",
                          marginLeft: "5px",
                          color:"gray",
                          fontSize:"12px"
                        }}><strike><span>&#8377;</span>8999</strike></h5>
                      </div>
                      <div className="col-3">
                        <h6 style={{color:"red", fontSize:"12px", marginTop:"7px"}}>50% OFF</h6>
                      </div>
                    </div>
                  </div>
                  <h5 style={{
                          marginTop:"7px",
                          marginLeft: "5px",
                          color:"gray",
                          fontSize:"12px"
                        }}>Free Delivery in 0-2 Days</h5>
                  <h5 style={{
                          marginTop:"7px",
                          marginLeft: "5px",
                          color:"gray",
                          fontSize:"10px"
                        }}>Buying From</h5>
                  <i class='bx bxs-cart'></i><span style={{
                    fontSize:"12px",
                    marginLeft:"5px",
                  }}>Cart-N-You Pvt Ltd.</span>
                  <br></br>
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <i class='bx bxs-x-circle' style={{color:"#c2172e", fontSize:"18px"}}></i> <span style={{fontSize:"14px"}}>Cash On Delivery</span><br></br>
                        <i class='bx bxs-check-circle' style={{color:"green", fontSize:"18px"}}></i> <span style={{fontSize:"14px"}}>10 day Replacement Policy</span><br></br>
                        <i class='bx bxs-check-circle' style={{color:"green", fontSize:"18px"}}></i> <span style={{fontSize:"14px"}}>Free Shopping</span><br></br>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
            <div class="container" style={{height:"5.7rem",width:"93%",margin:"1rem auto",border:"1px solid gainsboro"}}>
                <div style={{float:"left",margin:"0.5rem 0"}}>

                    <input type="checkbox" style={{margin:"0.3rem 0.5rem",height:"1rem",backgroundColor:"#c2172e",float:"left"}}></input>
                    <span style={{float:"left"}}>Add GST details</span>
                    <br></br>
                    <p style={{color:"#ACA7A6",fontSize:"15px",float:"left",margin:"0 0.5rem"}}>06BPX123H84928</p>
                    <br></br>
                    <p style={{color:"#ACA7A6",fontSize:"16px",float:"left",margin:"0.5rem 0.5rem"}}>Cartnyou Retail Private Limited</p>
                </div>
                <div style={{float:"right",color:"red",margin:"0.5rem 0.5rem",fontSize:"18px"}}>
                    Edit
                </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
