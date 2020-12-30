import React, { Fragment } from 'react';

export const OrdersCard = (props) => {
    return (
      <Fragment>
      <section className="bodypanelmian aboutseller">
        <div className='sellerlocation' style={{ marginTop: '15px', backgroundColor: '#fff'}}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <img src='/image/RealmeX50Pro.jpg' className='img-fluid' alt='img1' />
              </div>
              <div className="col-8" style={{textAlign: 'left'}}>
                <p>Realme X50 Pro 5G (Rust Red, 256GB) (12GB RAM)</p>
                <p style={{color: 'green'}}>{ props.orderStatus }</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6" style={{textAlign: 'left', color: 'gray', fontSize: '12px'}}>
                {
                  if(props.orderStatus === 'Order Placed' || props.orderStatus === 'Dispatched' || props.orderStatus === 'Out For Delivery') {
                    <span>Placed Date: 15 March 2020</span>
                  }
                  else if(props.orderStatus === 'Refund Successful') {
                    <span>Refund Initiated: 15 March 2020</span>
                  }
                  else if(props.orderStatus === 'Delivered') {
                    <span>Deliver Date: 15 March 2020</span>
                  }
                  else {
                    null
                  }
                }
              </div>
              <div className="col-6"></div>
            </div>
            {props.review ? 
              null
              :
              <div className="row">
                <div className="col-6" style={{textAlign: 'left'}}>
                  <i class='bx bx-star'></i>
                  <i class='bx bx-star'></i>
                  <i class='bx bx-star'></i>
                  <i class='bx bx-star'></i>
                  <i class='bx bx-star'></i>
                </div>
                <div className="col-6" style={{textAlign: 'right'}}>
                  <span style={{color: '#c2172e', cursor: 'pointer'}}>Write a Review</span>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
      </Fragment>
    );
};
