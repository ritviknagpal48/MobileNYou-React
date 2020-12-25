import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { ProductGrid } from '../Components/AllProducts Page/ProductGrid';
import { Footer } from '../Components/Footer';
import { SortFilter } from '../Components/AllProducts Page/SortFilter';


export const FlashSale = () => {
  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv'>
          <Navbar></Navbar>
          <SortFilter></SortFilter>
          <div className='flashsale'>
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
        </div>

          <section className='bodypanelmian' style={{ marginBottom: '50px' }}>
            <div className='container'>
              <ProductGrid></ProductGrid>
              <Footer></Footer>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};
