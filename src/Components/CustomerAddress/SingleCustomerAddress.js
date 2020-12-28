import React, { Fragment } from 'react';

export const SingleCustomerAddress = () => {
  return (
    <Fragment>
        <div class='badydiv'>
            <div class='universalDiv'>
            <section className="bodypanelmian aboutseller text-left" style={{ marginBottom: '20%', paddingBottom: '10px' }}>

                <div className='sellerlocation'>
                    <h3>
                    <b>Neeraj Sharma <span className='text-right' style={{ backgroundColor: 'lightgray', padding: '2px 10px', fontSize: '10px' }}>Office</span></b>
                    </h3>
                    <p>
                    Rzg-91, Park Street Avenue, Lokhandwala, Delhi 110045
                    </p>
                    <p>
                    +91-9123-4101-01
                    </p>
                    <button type="button" class="btn btn-outline-danger" style={{ padding: '0', width: '100%' }}><span style={{ fontSize: '12px' }}>Change or Add Address</span></button>
                </div>
            </section>
            </div>

        </div>
    </Fragment>
  );
}

