import React, { Fragment } from 'react';
import { ProductCarousel } from './ProductCarousel';

export const Flashsale = () => {
  return (
    <Fragment>
      <div className='flashsale' style={{marginTop:"-1.2rem"}}>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='heing'>
              <h2>Flash Sale</h2>
            </div>
            <div className='d-flex colan justify-content-center'>
              <div className='timer'>
                <p className='tm'>02</p>
                <p className='dd'>DD</p>
              </div>
              <span className='coln'>:</span>
              <div className='timer'>
                <p className='tm'>12</p>
                <p className='dd'>HH</p>
              </div>
              <span className='coln'>:</span>
              <div className='timer'>
                <p className='tm'>24</p>
                <p className='dd'>MM</p>
              </div>
              <span className='coln'>:</span>
              <div className='timer'>
                <p className='tm'>38</p>
                <p className='dd'>SS</p>
              </div>
            </div>
          </div>
        </div>
        <ProductCarousel></ProductCarousel>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='viewbtn'>
              <a href='#' className='btn'>
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
