import React, { Fragment } from 'react';
import { ProductCard } from '../ProductCard';

export const ProductGrid = () => {
  return (
    <Fragment>
      <div className='flashsale'>
        <div className='row no-gutters' style={{ marginTop: '10px' }}>
          <div className='col'>
            <div className='flashslder'>
              <div className='row'>
                <div className='col-6 paddinghandle'>
                  <ProductCard></ProductCard>
                </div>
                <div className='col-6 paddinghandle'>
                  <ProductCard></ProductCard>
                </div>
                <div className='col-6 paddinghandle'>
                  <ProductCard></ProductCard>
                </div>
                <div className='col-6 paddinghandle'>
                  <ProductCard></ProductCard>
                </div>
                <div className='col-6 paddinghandle'>
                  <ProductCard></ProductCard>
                </div>
                <div className='col-6 paddinghandle'>
                  <ProductCard></ProductCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
