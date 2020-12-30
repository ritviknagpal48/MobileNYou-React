import React, { Fragment } from 'react';

export const OrdersCard = (props) => {
    return (
      <Fragment>
      <section className="bodypanelmian aboutseller">
        <div className='sellerlocation' style={{ marginTop: '15px', backgroundColor: '#fff'}}>
          <div className="container">
            <div className="row">
              <div className="col-2">
                <img src='/image/RealmeX50Pro.jpg' className='img-fluid' alt='img1' />
              </div>
              <div className="col-8">
                <div style={{left: '0'}}>
                  <p>Realme X50 Pro 5G (Rust Red, 256GB) (12GB RAM)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Fragment>
    );
};
