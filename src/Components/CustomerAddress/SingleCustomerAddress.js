import React, { Fragment } from 'react';

export const SingleCustomerAddress = (props) => {

  return (
    <Fragment>
              <section className="bodypanelmian aboutseller text-left">
                <div className='sellerlocation' style={{backgroundColor: '#ffffff'}}>
                    <h3>
                    <b>Neeraj Sharma <span className='text-right' style={{ backgroundColor: 'lightgray', padding: '2px 10px', fontSize: '10px' }}>Office</span></b>
                    {props.default?<span style={{fontSize:"11px",color:"grey"}}> Default</span>:null}
                    
                    <span class="dropdown-container" tabindex="-1">
                      <span class="three-dots" style={{float: 'right', cursor: 'pointer'}}></span>
                      <div className="container">
                      
                      <span class="dropdown" style={{right: '0'}}>
                        <a href="#"><div>Edit</div></a>
                        <a href="#"><div>Remove</div></a>
                        <a href="#"><div>Make as Default</div></a>
                      </span>
                      </div>
                      
                    </span>
                    </h3>
                    <p>
                    Rzg-91, Park Street Avenue, Lokhandwala, Delhi <br/>110045
                    </p>
                    <p>
                    +91-9123-4101-01
                    </p>
                </div>
                </section>
    </Fragment>
  );
}

