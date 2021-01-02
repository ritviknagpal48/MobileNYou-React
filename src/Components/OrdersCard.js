import React, { Fragment } from 'react';

export const OrdersCard = (props) => {
    return (
      <Fragment>
      <section className="bodypanelmian aboutseller">
        <div className={props.card? "sellerlocation": null} style={props.card? { marginTop: '15px', backgroundColor: '#fff'}:{marginBottom:"1rem"}}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <img src='/image/RealmeX50Pro.jpg' className='img-fluid' alt='img1' />
              </div>
              <div className="col-8" style={{textAlign: 'left'}}>
                <p>Realme X50 Pro 5G (Rust Red, 256GB) (12GB RAM)</p>
                {(props.orderStatus === "Cancelled") ? 
                  <p style={{color: '#c2172e'}}>{ props.orderStatus }</p>
                  :
                  <p style={{color: 'green'}}>{ props.orderStatus }</p>
                }
              </div>
            </div>
            <div className="row">
              <div className="col-8" style={{textAlign: 'left', color: 'gray', fontSize: '12px'}}>
                {props.card?(() => {
                  if(props.orderStatus === 'Order Placed' || props.orderStatus === 'Dispatched' || props.orderStatus === 'Out For Delivery') {
                    return (
                      <span>Placed Date: 15 March 2020</span>
                    )
                  }
                  else if(props.orderStatus === 'Refund Successful') {
                    return (
                      <span>Refund Initiated: 15 March 2020</span>
                    )
                  }
                  else if(props.orderStatus === 'Cancelled') {
                    return (
                      <span>Cancelled Date: 15 March 2020</span>
                    )
                  }
                  else {
                    return (
                      <span>Deliver Date: 15 March 2020</span>
                    )
                  }
                })():null}
              </div>
              <div className="col-6"></div>
            </div>
            {props.review && props.orderStatus === "Delivered" ? 
              <div className="row" style={{marginTop: '2%'}}>
                <div className="col-6" style={{textAlign: 'left'}}>
                  <i class='bx bx-star' style={{fontSize: '1.5rem'}}></i>
                  <i class='bx bx-star' style={{fontSize: '1.5rem'}}></i>
                  <i class='bx bx-star' style={{fontSize: '1.5rem'}}></i>
                  <i class='bx bx-star' style={{fontSize: '1.5rem'}}></i>
                  <i class='bx bx-star' style={{fontSize: '1.5rem'}}></i>
                </div>
                <div className="col-6" style={{textAlign: 'right'}}>
                  <span style={{color: '#c2172e', cursor: 'pointer', fontSize: '12px'}}>Write a Review</span>
                </div>
              </div>
              :
              null
            }
          </div>
        </div>
      </section>
      </Fragment>
    );
};
