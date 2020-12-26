import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { ProductGrid } from '../Components/AllProducts Page/ProductGrid';
import { Footer } from '../Components/Footer';
import { SortFilter } from '../Components/AllProducts Page/SortFilter';

export const AllProducts = () => {
  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv'>
          <Navbar></Navbar>
          <SortFilter></SortFilter>

          <section className='bodypanelmian' style={{ marginBottom: '55px' }}>
            <div className='container'>
              <ProductGrid></ProductGrid>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};
