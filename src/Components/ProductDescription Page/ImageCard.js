import React, { Fragment } from 'react';

export const ImageCard = (props) => {
  return (
    <Fragment>
      <div className='swiper-slide'>
        <div className='brandbox'>
          <img src='image/home/flash/img1.png' className='img-fluid' onClick={props.fullImage}/>
        </div>
      </div>
    </Fragment>
  );
};
