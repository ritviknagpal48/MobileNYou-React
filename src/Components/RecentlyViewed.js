import React, { Fragment } from 'react';
import { ProductCarousel } from './ProductCarousel';

export const RecentlyViewed = () => {
  return (
    <Fragment>
      <div className='flashsale recetnlyview'>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='heing'>
              <h2>Recently Viewed</h2>
            </div>
          </div>
        </div>
        <ProductCarousel></ProductCarousel>
      </div>
    </Fragment>
  );
};
