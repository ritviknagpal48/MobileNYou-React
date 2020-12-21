import React, { Fragment } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ProductCard } from './ProductCard';

export const ProductCarousel = () => {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: 'liner'
  };
  return (
    <Fragment>
      <div className='row no-gutters'>
        <div className='col'>
          <div className='flashsale'>
            <div className='flashslder'>
              <Slider {...settings}>
                {/* <div className="card-wrapper"> */}
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>

                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
