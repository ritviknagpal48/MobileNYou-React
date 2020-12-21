import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';

export const AboutSeller = () => {
  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv'>
          <div className='container'>
            <Navbar></Navbar>
          </div>
          <section className='bodypanelmian aboutseller text-left'>
            <div className='row no-gutters'>
              <div className='col'>
                <div className='sellerlocation'>
                  <h3>DIGIBUFF INDIA</h3>
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
                <div className='sellerrating'>
                  <h3>Seller Rating</h3>
                  <div className='iconholder'>
                    <p className='count'>
                      0<span className='p'>%</span>{' '}
                    </p>
                    <p className='postiverev'>Positive Reviews</p>
                  </div>
                  <div className='clearfix' />
                  <div className='iconholder'>
                    <p className='count'>0</p>
                    <p className='postiverev'>total Ratings</p>
                  </div>
                  <div className='clearfix' />
                  <div className='iconholder'>
                    <p className='count'>0</p>
                    <p className='postiverev'>Positive Reviews</p>
                  </div>
                </div>
                <div className='sellerlocation address'>
                  <h3>Contact Details</h3>
                  <p>
                    Name :<span className='text-right'> DIGIBUFF INDIA</span>
                  </p>
                  <p>
                    Address:
                    <span className='text-right'>
                      {' '}
                      House No.2345, Ground Floor, Guraon, Haryana, 122009
                    </span>
                  </p>
                  <p>
                    Webpage :
                    <span className='text-right'>
                      <span className='wurl'> https:Digibuff.com</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};
