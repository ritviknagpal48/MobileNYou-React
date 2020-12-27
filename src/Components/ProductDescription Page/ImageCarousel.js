import React, { Fragment } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageCard } from './ImageCard';

export const ImageCarousel = (props) => {
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
      <div className='row no-gutters'>
        <div className='col-12'>
          <div className='productimg'>
            <div className='wishlistsection'>
              <div className='icon'>
                <i className='fas fa-heart' />
              </div>
            </div>
            <div className='flashsale'>
              <div className='flashslder'>
                <div className='productview'>
                  {/* <div className='swiper-wrapper'> */}
                  <Slider {...settings}>
                    <ImageCard handleShow={props.handleShow}></ImageCard>
                    <ImageCard handleShow={props.handleShow}></ImageCard>

                    <ImageCard handleShow={props.handleShow}></ImageCard>
                  </Slider>
                  {/* </div> */}
                  {/* Add Pagination */}
                  <br />
                  <div className='swiper-pagination' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
