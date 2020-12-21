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
            <section className='section1'>
              <div class='where-cont'>
                <div class='where'>
                  <p class=' c c1'>1</p>
                  <p>Add Address</p>
                </div>
                <div class=' hr hr1'></div>
                <div class='where'>
                  <p class='c c2'>2</p>
                  <p>Order Summary</p>
                </div>
                <div class=' hr hr2'></div>
                <div class='where'>
                  <p class='c c3'>3</p>
                  <p>Payment</p>
                </div>
              </div>
              <div>
                <div className='address-section'>
                  <div className='user-name'>
                    <p>Neeraj Sharma</p>
                    <p className='type'>office</p>
                  </div>
                  <p className='address'>
                    Rzg-261,Sitapuri,Street No. 13,New Delhi,Delhi 110045
                  </p>
                  <p className='phone-no'>+91-97167281-70</p>
                  <button>Change or Add Address</button>
                </div>
                <div className='product-container'>
                  <div className='product-img-name'>
                    <img
                      src='image/home/flash/img1.png'
                      className='img-fluid'
                    />
                    <div className='name-spec'>
                      <p>Realme Mobile Ram 4GB, 64GB, 660 Processer...</p>
                      <p>Red 4gb 128gb</p>
                    </div>
                  </div>
                  <div className='quantity'>
                    <label>Qty</label>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className='condition'>
                    <p>Condition:</p>
                    <span>Renewed</span>
                  </div>
                  <div className='price1'>
                    <p>₹ 5999</p>
                    <s>8999</s>
                    <p>50% OFF</p>
                  </div>
                  <div className='del-time'>
                    <p>Free delivery in 0-2 days</p>
                  </div>
                  <div className='buying-details'>
                    {/* <span>Buying From</span>
                            <div class="option">
                                <p>&#1F6D6</p>
                                <p>Cart-N-you Pvt.Ltd</p>
                            </div> */}
                    <div className='option'>
                      <p id='not'>✖</p>
                      <p>Cash on Delivery</p>
                    </div>
                    <div className='option'>
                      <p>✔</p>
                      <p>10 Days Replacements Policy</p>
                    </div>
                    <div className='option'>
                      <p>✔</p>
                      <p>Free Shipping</p>
                    </div>
                  </div>
                </div>
                <div className='gst-details'>
                  <div className='add-GST'>
                    <div>
                      <input type='checkbox' />
                      <label>Add GST details</label>
                    </div>
                    <a className='edit-gst'>Edit</a>
                  </div>
                  <p>di3n543i53454n63</p>
                  <p>Cartnyou Retail Private Limited</p>
                </div>
                <div className='price-details'>
                  <p className='price-detail-tag'>Price Details</p>
                  <div className='prices'>
                    <div className='pr amount'>
                      <p>Price(9 items):</p>
                      <p>₹ 5000</p>
                    </div>
                    <div className='pr Shipping-price'>
                      <p>Shipping Cost</p>
                      <p className='free-ship'>Free Shipping</p>
                    </div>
                    <div className='pr discount'>
                      <p>Discount</p>
                      <p>-₹ 500</p>
                    </div>
                    <div className='pr MNU Money'>
                      <p>MNU Money</p>
                      <p>-₹ 500</p>
                    </div>
                  </div>
                  <div className='pr total-price'>
                    <p>Total</p>
                    <p>₹ 4000</p>
                  </div>
                  <p className='money'>
                    you will save <span className='money-save'>₹ 500 </span>on
                    this order
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
