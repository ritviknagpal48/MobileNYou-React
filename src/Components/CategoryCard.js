import React, { Fragment } from 'react';

export const CategoryCard = () => {
  return (
    <Fragment>
      <div className='col'>
        <div className='categbox'>
          <div className='img-bg'>
            <img
              src='image/home/categ/img4.png'
              className='img-fluid'
              alt='Speakers'
            />
          </div>
          <p>Speakers</p>
        </div>
      </div>
    </Fragment>
  );
};
