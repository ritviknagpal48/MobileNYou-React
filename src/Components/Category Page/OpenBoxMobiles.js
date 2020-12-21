import React, { Fragment } from 'react';
import { ProductCarousel } from '../ProductCarousel';

export const OpenBoxMobiles = () => {
  return (
    <Fragment>
      <div className='flashsale'>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='heing'>
              <h2>Open Box Mobiles</h2>
            </div>
            <ProductCarousel></ProductCarousel>
          </div>
        </div>
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
