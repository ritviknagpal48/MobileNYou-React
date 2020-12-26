/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import { Navbar } from '../Components/Navbar';
import { ImageCarousel } from '../Components/ProductDescription Page/ImageCarousel';
import { ReviewCarousel } from '../Components/ProductDescription Page/ReviewCarousel';
import { UserReviews } from '../Components/ProductDescription Page/UserReviews';
import { SingleBanner } from '../Components/Banners/SingleBanner';
import { RelatedProducts } from '../Components/ProductDescription Page/RelatedProducts';
import { Footer } from '../Components/Footer';
import { StickyFooter } from '../Components/ProductDescription Page/StickyFooter';


export const ProductDescription = () => {
  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv'>
          <Navbar></Navbar>

          <section className='bodypanelmian'>
            <div className='container'>
              <ImageCarousel></ImageCarousel>
              <div class='row no-gutters'>
                <div class='col-12'>
                  <div class='flashsale'>
                    <div className='productdetails text-left txt'>
                      <h5 className='p-name'>
                        Realme x50 Pro Realme x50 Pro Realme x50 Pro Realme x50
                        Pro
                      </h5>
                      <div className='price d-flex float-left'>
                        <p className='m-price'>
                          <i className='fas fa-rupee-sign' aria-hidden='true' />{' '}
                          599
                        </p>
                        <span className='full-p'>
                          <i className='fas fa-rupee-sign' aria-hidden='true' />{' '}
                          899
                        </span>
                        <span className='offp'>50% off</span>
                      </div>
                      <div className='rateing text-right'>
                        <p className='rate'>
                          <img src='image/star.svg' className='star' /> 4.2
                        </p>
                        <br />
                        <p className='ratingcount'>3214323 Reviews</p>
                      </div>
                      <div className='emi'>
                        <p>
                          <img src='image/Calculator.svg' /> EMI Start at{' '}
                          <img src='image/bx-rupee.svg' className='rup' /> 500{' '}
                          <img src='image/info.svg' />
                        </p>
                      </div>
                    </div>
                    <div>
                      <div id='profile-description'>
                        <div className='offer-section text-left text show-more-height'>
                          <h3>Offers</h3>
                          <div className='br'>
                            <div className='tc'>
                              <div className='centerdiv d-flex justify-content-between'>
                                <p>
                                  <img src='image/Tag.svg' /> No Cost EMI: No
                                  cost EMI available on select cards.
                                  <br /> Please check'EMI options'{' '}
                                </p>
                                <p>
                                  <b>T&amp;C</b>
                                </p>
                              </div>
                            </div>
                            <div className='tc'>
                              <div className='centerdiv d-flex justify-content-between'>
                                <p>
                                  <img src='image/Tag.svg' /> No Cost EMI: No
                                  cost EMI available on select cards.
                                  <br /> Please check'EMI options'{' '}
                                </p>
                                <p>
                                  <b>T&amp;C</b>
                                </p>
                              </div>
                            </div>
                            <div className='tc'>
                              <div className='centerdiv d-flex justify-content-between'>
                                <p>
                                  <img src='image/Tag.svg' /> No Cost EMI: No
                                  cost EMI available on select cards.
                                  <br /> Please check'EMI options'{' '}
                                </p>
                                <p>
                                  <b>T&amp;C</b>
                                </p>
                              </div>
                            </div>
                            <div className='tc'>
                              <div className='centerdiv d-flex justify-content-between'>
                                <p>
                                  <img src='image/Tag.svg' /> No Cost EMI: No
                                  cost EMI available on select cards.
                                  <br /> Please check'EMI options'{' '}
                                </p>
                                <p>
                                  <b>T&amp;C</b>
                                </p>
                              </div>
                            </div>
                            <div className='tc'>
                              <div className='centerdiv d-flex justify-content-between'>
                                <p>
                                  <img src='image/Tag.svg' /> No Cost EMI: No
                                  cost EMI available on select cards.
                                  <br /> Please check'EMI options'{' '}
                                </p>
                                <p>
                                  <b>T&amp;C</b>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className='moreoffer show-more'>
                          +5 More Offer Available{' '}
                        </p>
                      </div>
                      <div className='cod-redplace d-flex text-left justify-content-around'>
                        <p>
                          <img src='image/Cancel.svg' /> <br /> 10 Days
                          Replacement
                        </p>
                        <p>
                          <img src='image/Check.svg' /> <br /> Cash on Delivery{' '}
                        </p>
                        <p>
                          <img src='image/Cancel.svg' /> <br /> Free Shipping
                        </p>
                      </div>
                    </div>
                    <div>
        <div className="delivery text-left">
          <h3 className="bd">Delivery  Details</h3>
          <div className="deliverymian">
            <div className="pinc d-flex justify-content-between">
              <p className="showpin"><img src="image/Loaction.svg" /> 110045</p>
              <p className="changepin">Change Pincode <i className="fas fa-chevron-right" /></p>
            </div>
            <div className="expect">
              <h3>Expected Delivery 27 Nov</h3>
              <p>The final Delivery Date will Depend on the items in your bag</p>
            </div>
            <div className="cod">
              <p>Cash on Delivery Available</p>
            </div>
          </div>
          <div className="changepin" style={{display: 'none'}}>
            <div className="form-group d-flex">
              <input type="text" className="form-control" placeholder="Enter Pincode" />
              <button type="button" className="btn btn-danger bgbtn">Check</button>
            </div>
          </div>
        </div>
        <div className="selectvariants text-left">
          <h3>Select Variants</h3>
          <div className="boxvariats">
            <p className="condition">Condition</p>
            <div className="tabv d-flex">
              <p>Renewed</p>
              <p className="active">Suberb</p>
            </div>
            <ul className="d-flex justify-content-between">
              <li>47 Quality Check</li>
              <li>Warranty From Seller</li>
              <li>Easy Return</li>
            </ul>
            <div className="rightarrw">
                <Link to='/productvariants'>
                <i className="fas fa-chevron-right" style={{color: "#c21930"}} aria-hidden="true" />

                </Link>
            </div>
          </div>
        </div>
        <div className="selectvariants text-left">
          <div className="boxvariats">
            <ul className="d-flex justify-content-start pt-0">
              <p>
                <span className="tp">Color</span><br />
                <span className="bt">Space Black</span>
              </p>
              <p>
                <span className="tp">Storage</span><br />
                <span className="bt">64GB</span>
              </p>
              <p>
                <span className="tp">Ram</span><br />
                <span className="bt">4GB</span>
              </p>
            </ul>
            <div className="rightarrw tw">
                <Link to='/productvariants'>
                <i className="fas fa-chevron-right" style={{color: "#c21930"}} aria-hidden="true" />

                </Link>
            </div>
          </div>
        </div>
        <div className="specification">
          <h3 className="text-left">Specification</h3>
          <div className="sdetails">
            <div className="row no-gutters">
              <div className="col">
                <p className="text-left"><i className="fas fa-circle" aria-hidden="true" /> Display</p>
              </div>
              <div className="col">
                <p className="text-right">16.56 cm (6.52 inch)</p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col">
                <p className="text-left"><i className="fas fa-circle" aria-hidden="true" /> Resolution</p>
              </div>
              <div className="col">
                <p className="text-right">16.56 cm </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col">
                <p className="text-left"><i className="fas fa-circle" aria-hidden="true" /> Resolution Type</p>
              </div>
              <div className="col">
                <p className="text-right">16.56 cm </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col">
                <p className="text-left"><i className="fas fa-circle" aria-hidden="true" /> GPU</p>
              </div>
              <div className="col">
                <p className="text-right">16.56 cm </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col">
                <p className="text-left"><i className="fas fa-circle" aria-hidden="true" /> Display Type</p>
              </div>
              <div className="col">
                <p className="text-right">Gorilla glass </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col">
                <p className="text-left"><i className="fas fa-circle" aria-hidden="true" /> Display Color</p>
              </div>
              <div className="col">
                <p className="text-right">Black </p>
                <Link to='/productspecifications'>
                <p className="text-right viwall">All Details <i className="fas fa-chevron-right" aria-hidden="true" /></p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="warranty text-left">
          <div className="iconholder">
            <div className="icon">
              <img src="image/medal.svg" />
            </div>
            <p className="wrtybox"><span>Warranty</span></p>
            <p className="stext">Seller Warranty of 6 month provided by <br />CART-N-YOU PVT.LTD</p>
          </div>
        </div>
        <div className="rating_review text-left">
          <div className="row no-gutters">
            <div className="col">
              <div className="ratep">
                <h4><span className="ponit">4.2</span><span className="pt">/5</span></h4>
                <img src="image/rating/r4.svg" alt="" />
              </div>
            </div>
            <div className="col">
              <p className="rightrate"><span className="rate">85 Rating </span>| <span className="rate">42 Reviews</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className='reviewrating'>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='user-review'>
      <ReviewCarousel></ReviewCarousel>
      <UserReviews></UserReviews>
      </div>
              </div>
            </div>
          </div>
        <div className="specification">
        <div className="sdetails">
        <div className="row no-gutters">
        <div className="col">
        <p className="text-right viwall">See All 24 Reviews <i className="fas fa-chevron-right" aria-hidden="true" /></p>
</div>
</div>
</div>
</div>

<div className="specification">
        <h3 className="text-left">Seller Information</h3>
        <div className="sdetails text-left">
          <div className="row no-gutters">
            <div className="col">
              <p>Sold By</p>
              <p className="text-left"> DIGIBUFF INDIA</p>
              <p>Gurgao, Haryana</p>
            </div>
            <div className="col flex-end text-right">
              <p className="showbtn "> 
              <Link to='/aboutseller' style={{color: '#c21930'}}>
              
              About Seller  <i className="fas fa-chevron-right" aria-hidden="true" />
              </Link>
              
              </p>

            </div>
          </div>
        </div>
      </div>
      <SingleBanner></SingleBanner>
      <RelatedProducts></RelatedProducts>
      <Footer></Footer>
      <StickyFooter></StickyFooter>
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
