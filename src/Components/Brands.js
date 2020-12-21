import React, { Fragment } from 'react';
import { BrandCard } from './BrandCard';

export const Brands = () => {
  return (
    <Fragment>
      <div className='brands'>
        <div className='heing'>
          <h2>Short By Brands</h2>
        </div>
        <div className='row no-gutters'>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
        </div>
      </div>
    </Fragment>
  );
};
