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
                  <img src='image/rating/r4.svg' alt='' />
                  <p>
                    Marchant Since :
                    <span className='text-right'> OCT 2019</span>
                  </p>
                  <p>
                    Location :<span className='text-right'> Gurgaon</span>
                  </p>
                  <p>
                    Total Product in stock :{' '}
                    <span className='text-right'> 294</span>
                  </p>
                  <p>
                    Total product sold till date :{' '}
                    <span className='text-right'> 29324</span>
                  </p>
                </div>
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
