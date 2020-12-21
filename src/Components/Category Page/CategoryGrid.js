import React, { Fragment } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CategoryCard } from '../CategoryCard';

export const CategoryCarousel = () => {
  let settings = {
    dot: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    cssEase: 'liner'
  };
  return (
    <Fragment>
      <div className='categry text-center'>
        <div className='row no-gutters'>
          {/* <div className='productslder'> */}
          {/* <Slider {...settings}> */}
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
          {/* </Slider> */}
        </div>
      </div>
    </Fragment>
  );
};
