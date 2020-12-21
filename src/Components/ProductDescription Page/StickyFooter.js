import React, { Fragment } from 'react';

export const StickyFooter = () => {
  return (
    <Fragment>
      <div className='stckyfooter'>
        <div>
          <ul className='d-flex justify-content-center'>
            <li>
              <span className='wp'>
                <i className='fab fa-whatsapp' />
              </span>
            </li>
            <li>
              <span className='cart'>
                <i className='fas fa-shopping-cart' />
              </span>
            </li>
            <li>
              <span>
                <button type='button' className='btn btn-default'>
                  <i className='fas fa-bolt' /> Buy Now
                </button>{' '}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
