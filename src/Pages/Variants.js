/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { ImageBox } from '../Components/VariantsPage/ImageBox';

export const Variants = () => {
  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv'>
          <div className='container'>
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
            <div className='row no-gutters'>
              <div className='col'>
                <div className='pcolor text-left brtop'>
                  <p className='pmiancolor'>
                    Color <span className='clr-p'>Green</span>
                  </p>
                  <div className='phonebox'>
                    <ul className='d-flex'>
                      <ImageBox></ImageBox>
                      <ImageBox></ImageBox>
                      <ImageBox></ImageBox>
                      <ImageBox></ImageBox>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='row no-gutters'>
              <div className='col'>
                <div className='pcolor text-left'>
                  <p className='pmiancolor'>
                    Ram <span className='clr-p'>4 GB</span>
                  </p>
                  <div className='phonebox ram'>
                    <ul className='d-flex'>
                      <li>
                        <span className='storage rm active'>4 GB</span>
                      </li>
                      <li>
                        <span className='storage rm'>6 GB</span>
                      </li>
                      <li>
                        <span className='storage rm'>8 GB</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='row no-gutters'>
              <div className='col'>
                <div className='pcolor text-left brbotm'>
                  <p className='pmiancolor'>
                    Storage <span className='clr-p'>64 GB</span>
                  </p>
                  <div className='phonebox ram'>
                    <ul className='d-flex'>
                      <li>
                        <span className='storage st active'>64 GB</span>
                      </li>
                      <li>
                        <span className='storage st'>128 GB</span>
                      </li>
                      <li>
                        <span className='storage st'>256 GB</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='productcondition'>
              <div className='row no-gutters'>
                <div className='col-6'>
                  <p className='text-left'>Product Condition</p>
                </div>
                <div className='col-6'>
                  <p className='text-right'>
                    Condition <span className='renw'>Renewed</span>
                  </p>
                </div>
                <div className='col'>
                  <div className='conditionlist'>
                    <ul className='d-flex'>
                      <li>
                        <span> 47 Quality Check</span>
                      </li>
                      <li>
                        <span>
                          {' '}
                          <i
                            className='fas fa-circle'
                            aria-hidden='true'
                          />{' '}
                          Warranty From Seller
                        </span>
                      </li>
                      <li>
                        <span>
                          {' '}
                          <i
                            className='fas fa-circle'
                            aria-hidden='true'
                          />{' '}
                          Easy Return
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col'>
                  <div className='table-responsive table_condition'>
                    <table className='table table-bordered'>
                      <thead>
                        <tr>
                          <th scope='col'>Condition</th>
                          <th scope='col'>Usage</th>
                          <th scope='col'>Warranty</th>
                          <th scope='col'>Scratches</th>
                          <th scope='col'>Dents</th>
                          <th scope='col'>Accessories</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Unboxed like New</td>
                          <td>Unused</td>
                          <td>12 Months</td>
                          <td>Zero</td>
                          <td>Micro</td>
                          <td>Original</td>
                        </tr>
                        <tr className='active'>
                          <td>Superd Renewed</td>
                          <td>Moderate</td>
                          <td>12 Months</td>
                          <td>Up to 05</td>
                          <td>Micro</td>
                          <td>Compatible</td>
                        </tr>
                        <tr>
                          <td>Good Renewed</td>
                          <td>Extensive</td>
                          <td>12 Months</td>
                          <td>Up to 105</td>
                          <td>Micro</td>
                          <td>Compatible</td>
                        </tr>
                        <tr>
                          <td>Ok Renewed</td>
                          <td>Heavily Used</td>
                          <td>12 Months</td>
                          <td>Up to 10</td>
                          <td>Micro</td>
                          <td>Compatible</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className='continebtn'>
              <div className='row no-gutters'>
                <div className='col'>
                  <button className='btn btn-danger w-100' type='button'>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};
