import React, { Fragment } from 'react';

export const SingleCustomerAddress = () => {

  function dropDown(params) {
    document.getElementById("miniDropdown").classList.toggle("show");
  }
  window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
              }
          }
      }
  }
  return (
    <Fragment>
              <section className="bodypanelmian aboutseller text-left">
                <div className='sellerlocation' style={{backgroundColor: '#ffffff'}}>
                    <h3>
                    <b>Neeraj Sharma <span className='text-right' style={{ backgroundColor: 'lightgray', padding: '2px 10px', fontSize: '10px' }}>Office</span></b>
                    <span style={{float: 'right', cursor: 'pointer'}} onClick={dropDown}><i className="fas fa-ellipsis-v dropbtn"></i></span>
                    </h3>
                    <div className="container">
                      <div className="row">
                          <div className="col-6"></div>
                          <div className="col-6">
                              <div id="miniDropdown" class="dropdown-content">
                                <a href="#">Edit</a>
                                <a href="#">Remove</a>
                                <a href="#">Make as Default</a>
                              </div>
                          </div>
                      </div>
                    </div>
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

