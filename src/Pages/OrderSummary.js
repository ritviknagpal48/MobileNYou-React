import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import styles from '../Components/OrderSummary Page/style.module.css';

export const OrderSummary = () => {
  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv'>
          <div class='container'>
            <Navbar></Navbar>
            <section className="bodypanelmian aboutseller text-left" style={{ marginBottom: '20%', paddingBottom: '10px' }}>
              <div className="container-for-progress" style={{ padding: "4px", boxShadow: "0px 0px 4px 1px gainsboro", margin: "10px 14px auto 14px" }}>
                <ul className="progressbar-progress" style={{ display: "flex !important", justifyContent: "center", flexDirection: "row" }}>
                  <li className="Progress-Active" style={{ fontSize: "12px" }}>Add Address</li>
                  <li className="Progress-Active" style={{ fontSize: "12px" }}>Order Summary</li>
                  <li style={{ fontSize: "12px" }}>Payment</li>
                </ul>
              </div>
              <br></br><br></br><br></br>
              <div className='sellerlocation'>
                <h3>
                  <b>Neeraj Sharma <span className='text-right' style={{ backgroundColor: 'lightgray', padding: '2px 10px', fontSize: '10px' }}>Office</span></b>
                </h3>
                <p>
                  Rzg-91, Park Street Avenue, Lokhandwala, Delhi 110045
                  </p>
                <p>
                  +91-9123-4101-01
                  </p>
                <button type="button" class="btn btn-outline-danger" style={{ padding: '0', width: '100%' }}><span style={{ fontSize: '12px' }}>Change or Add Address</span></button>
              </div>
              <div className='sellerlocation'>
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
                <h5 style={{
                  marginTop: "7px",
                  marginLeft: "5px",
                  color: "gray",
                  fontSize: "12px"
                }}>Free Delivery in 0-2 Days</h5>
                <h5 style={{
                  marginTop: "7px",
                  marginLeft: "5px",
                  color: "gray",
                  fontSize: "10px"
                }}>Buying From</h5>
                <i class='bx bxs-cart'></i><span style={{
                  fontSize: "12px",
                  marginLeft: "5px",
                }}>Cart-N-You Pvt Ltd.</span>
                <br></br>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <i class='bx bxs-x-circle' style={{ color: "#c2172e", fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>Cash On Delivery</span><br></br>
                      <i class='bx bxs-check-circle' style={{ color: "green", fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>10 day Replacement Policy</span><br></br>
                      <i class='bx bxs-check-circle' style={{ color: "green", fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>Free Shopping</span><br></br>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container" style={{ height: "5.7rem", width: "93%", margin: "1rem auto", border: "1px solid gainsboro", boxShadow: "0px 0px 4px 1px gainsboro" }}>
                <div style={{ float: "left", margin: "0.5rem 0" }}>

                  <input type="checkbox" style={{ margin: "0.12rem 0.5rem", height: "1rem", backgroundColor: "#c2172e", float: "left" }}></input>
                  <span style={{ float: "left", fontSize: "14px" }}>Add GST details</span>
                  <br></br>
                  <p style={{ color: "#ACA7A6", fontSize: "12px", float: "left", margin: "0 0.5rem" }}>06BPX123H84928</p>
                  <br></br>
                  <p style={{ color: "#ACA7A6", fontSize: "12px", float: "left", margin: "0.5rem 0.5rem" }}>Cartnyou Retail Private Limited</p>
                </div>
                <div style={{ float: "right", color: "red", margin: "0.5rem 0.5rem", fontSize: "15px" }}>
                  Edit
                </div>
              </div>

              <div className='sellerlocation'>
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
              position: 'fixed',
              bottom: '0',
              width: '100%',
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
                      <p style={{ margin: '0 -0.3rem' }}>Total</p>
                      <p style={{ color: 'red' }}>₹5899</p>
                    </div>
                  </div>
                  <div class="col-6">
                    <button type="button" class="btn btn-danger" style={{
                      float: 'right',
                      margin: '0 2rem'
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
