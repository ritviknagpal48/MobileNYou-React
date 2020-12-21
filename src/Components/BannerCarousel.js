import React, { Fragment } from 'react';
import { BannerCard } from './BannerCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export const BannerCarousel = () => {
  let settings = {
    dot: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'liner'
  };
  return (
    <Fragment>
      <div className='productslder'>
        <Slider {...settings}>
          <BannerCard></BannerCard>
          <BannerCard></BannerCard>
          <BannerCard></BannerCard>
        </Slider>
      </div>
    </Fragment>
  );
};
