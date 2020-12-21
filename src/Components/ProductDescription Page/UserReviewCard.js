import React, { Fragment } from 'react';

export const UserReviewCard = () => {
  return (
    <Fragment>
      <div className='ratingview'>
        <div className='top d-flex'>
          <p className='text-left'>
            <img src='image/rating/r4.svg' /> <span className='fr'>4.0</span>{' '}
          </p>
          <p className='float-right'>10-Dec-2019 </p>
        </div>
        <div className='detail text-left'>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </p>
        </div>
        <div className='productimg text-left'>
          <div className='imgbox d-flex'>
            <img src='image/rating/pview.jpg' alt='' />
            <img src='image/rating/pview1.jpg' alt='' />
            <img src='image/rating/pview2.jpg' alt='' />
            <img src='image/rating/pview.jpg' alt='' />
            <img src='image/rating/pview1.jpg' alt='' />
          </div>
        </div>
        <div className='namelike'>
          <p className='text-left'>Neeraj Sharma</p>
          <div className='likedilike text-right d-flex'>
            <p className='like'>
              <i className='far fa-thumbs-up' /> 44
            </p>
            <p className='dislike'>
              <i className='far fa-thumbs-down' /> 44
            </p>
          </div>
        </div>
        <div className='ellipsis'>
          <span>
            <i className='fas fa-ellipsis-v' />
          </span>
        </div>
      </div>
    </Fragment>
  );
};
