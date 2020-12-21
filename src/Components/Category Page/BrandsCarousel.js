import React, { Fragment } from 'react';
import { BrandCard } from './BrandCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const BrandsCarousel = () => {
  let settings = {
    dot: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'liner'
  };
  return (
    <Fragment>
      <div className='brands'>
        <div className='flashsale'>
          <div className='row no-gutters'>
            <div className='col'>
              <div className='heing'>
                <h2>Shop by Brands</h2>
              </div>
              <div className='flashslder'>
                <div className='top-brands'>
                  <Slider {...settings}>
                    <BrandCard></BrandCard>
                    <BrandCard></BrandCard>
                    <BrandCard></BrandCard>
                    <BrandCard></BrandCard>
                    <BrandCard></BrandCard>
                    <BrandCard></BrandCard>

                    <BrandCard></BrandCard>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
