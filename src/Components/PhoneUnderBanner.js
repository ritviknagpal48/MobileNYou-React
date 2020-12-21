import React, { Fragment } from 'react';
import { PhoneUnderCard } from './PhoneUnderCard';

export const PhoneUnderBanner = () => {
  return (
    <Fragment>
      <div className='clearfix' />
      {/* Phone Under section */}
      <div className='phoneunder'>
        <div className='container'>
          <div className='row no-gutters'>
            <PhoneUnderCard></PhoneUnderCard>
            <PhoneUnderCard></PhoneUnderCard>
            <PhoneUnderCard></PhoneUnderCard>
            <PhoneUnderCard></PhoneUnderCard>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
