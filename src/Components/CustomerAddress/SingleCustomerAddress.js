import React, { Fragment } from 'react';

export const SingleCustomerAddress = () => {
  return (
    <Fragment>
            <div class='universalDiv'>
              <section className="bodypanelmian aboutseller text-left">
                <div className='sellerlocation'>
                    <h3>
                    <b>Neeraj Sharma <span className='text-right' style={{ backgroundColor: 'lightgray', padding: '2px 10px', fontSize: '10px' }}>Office</span></b>
                    <span style={{float: 'right', cursor: 'pointer'}}><i className="fas fa-ellipsis-v dropbtn"></i></span>
                    </h3>
                    <p>
                    Rzg-91, Park Street Avenue, Lokhandwala, Delhi <br/>110045
                    </p>
                    <p>
                    +91-9123-4101-01
                    </p>
                </div>
                </section>
            </div>
    </Fragment>
  );
}

