import React, { Fragment } from 'react';
import { ReviewCard } from './ReviewCard';

export const ReviewCarousel = () => {
  return (
    <Fragment>
      <div className='userimg d-flex'>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </div>
    </Fragment>
  );
};
