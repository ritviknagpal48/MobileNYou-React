import React from 'react';

export const MoreInfo = () => {
  return (
    <div
      className='tab-pane fade'
      id='pills-contact'
      role='tabpanel'
      aria-labelledby='pills-contact-tab'
    >
      <div className='moreinfo text-left'>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='headgen'>
              <p className='comnhead'>Key Features</p>
              <p className='ptxt'>
                Brand Warranty of 1 year Availble for Mobile Including Battery
                and 6 Months for Accessories
              </p>
            </div>
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='headgen'>
              <p className='comnhead'>Domestic Warrantry</p>
              <p className='ptxt'>1 year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
