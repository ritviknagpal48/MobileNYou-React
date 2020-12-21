import React, { Fragment } from 'react';

export const ProductCard = () => {
  return (
    <Fragment>
      <div className='flasebox' style={{ marginTop: '5px' }}>
        <img
          src='/image/home/flash/img1.png'
          className='img-fluid'
          alt='img1'
        />
        <div className='txt'>
          <p className='productn'>
            Realme Mobile Ram 4GB, 64GB, 660 Processer...
          </p>
          <div className='price d-flex float-left'>
            <p className='m-price'>
              <i className='fas fa-rupee-sign' /> 599
            </p>
            <span className='full-p'>
              <i className='fas fa-rupee-sign' /> 899
            </span>
            <span className='offp'>50%</span>
          </div>
          <div
            className='rateing text-right'
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '0.5rem'
            }}
          >
            <p className='rate'>
              <img
                src='/image/star.svg'
                style={{ display: 'inline' }}
                className='star'
                alt='star'
              />{' '}
              <span>4.2</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
