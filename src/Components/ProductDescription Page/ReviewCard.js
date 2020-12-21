import React, { Fragment } from 'react';

export const ReviewCard = () => {
  return (
    <Fragment>
      <div className='imgbox'>
        <div className='blank_user'>
          <span className='username'>N</span>
        </div>
        <div className='tolrate'>
          <span className='pp'>
            <a href='#' className='star'>
              ★
            </a>{' '}
            4
          </span>
        </div>
      </div>
    </Fragment>
  );
};
