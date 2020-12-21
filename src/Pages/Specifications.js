import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { Description } from '../Components/Specifications Page/Description';
import { Specification } from '../Components/Specifications Page/Specifications';
import { MoreInfo } from '../Components/Specifications Page/MoreInfo';

export const Specifications = () => {
  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv'>
          <div class='container'>
            <Navbar></Navbar>
          </div>
          <section className='bodypanelmian variantspage'>
            <div className='row no-gutters'>
              <div className='col-4'>
                <div className='productimg'>
                  <img src='image/refb/img1.png' className='img-fluid' />
                </div>
              </div>
              <div className='col-8'>
                <div className='productdetail text-left'>
                  <p className='p-name'>
                    Realme Mobile Ram 4GB, 64GB, Processer...
                  </p>
                  <p className='condis'>
                    Condition <span className='reniewd'>Renewed</span>{' '}
                  </p>
                  <ul className='d-flex'>
                    <li>
                      <a href='#'>47 Quality check </a>{' '}
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fas fa-circle' /> Warranty From Seller
                      </a>{' '}
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fas fa-circle' /> Easy Return
                      </a>{' '}
                    </li>
                  </ul>
                  <div className='price d-flex float-left'>
                    <p className='m-price'>
                      <i className='fas fa-rupee-sign' aria-hidden='true' /> 599
                    </p>
                    <span className='full-p'>
                      <i className='fas fa-rupee-sign' aria-hidden='true' /> 899
                    </span>
                    <span className='offp'>50%</span>
                  </div>
                  <div className='clearfix' />
                </div>
              </div>
            </div>
            <div className='specificationtab'>
              <div className='row no-gutters'>
                <div className='col'>
                  <ul className='nav nav-pills' id='pills-tab' role='tablist'>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        id='pills-home-tab'
                        data-toggle='pill'
                        href='#pills-home'
                        role='tab'
                        aria-controls='pills-home'
                        aria-selected='true'
                      >
                        Description
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link active'
                        id='pills-profile-tab'
                        data-toggle='pill'
                        href='#pills-profile'
                        role='tab'
                        aria-controls='pills-profile'
                        aria-selected='false'
                      >
                        Specifications
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        id='pills-contact-tab'
                        data-toggle='pill'
                        href='#pills-contact'
                        role='tab'
                        aria-controls='pills-contact'
                        aria-selected='false'
                      >
                        More Info
                      </a>
                    </li>
                  </ul>
                  <div className='tab-content' id='pills-tabContent'>
                    <Description></Description>
                    <Specification></Specification>
                    <MoreInfo></MoreInfo>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};
