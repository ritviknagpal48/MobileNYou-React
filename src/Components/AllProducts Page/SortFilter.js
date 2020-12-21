import React, { Fragment } from 'react';

export const SortFilter = () => {
  return (
    <Fragment>
      <section class='bodypanelmian multiproductview try'>
        <div class='container'>
          <div class='row no-gutters'>
            <div class='col-12'>
              <div className='filter_div'>
                <div
                  className='filerhead d-flex text-center'
                  style={{ marginTop: '0px' }}
                >
                  <a
                    href='#'
                    className='shortbyopen'
                    data-toggle='modal'
                    data-target='#exampleModal'
                  >
                    {' '}
                    <img src='image/filter/s-main.svg' className='iconf' /> Sort
                    By
                  </a>
                  <a href='#' className='filter'>
                    <img src='image/filter/filter.svg' className='iconf' />{' '}
                    Filter
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='bodypanelmian multiproductview'>
        <div class='container'>
          <div class='row no-gutters'>
            <div class='col-12'>
              <div className='filter_div'>
                <div
                  className='modal fade'
                  id='exampleModal'
                  tabIndex={-1}
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div className='modal-dialog modal-dialog-centered shortby'>
                    <div className='modal-content'>
                      <div className='modal-header text-center'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                          <img
                            src='image/filter/shor-ins.svg'
                            className='shrtimg'
                          />{' '}
                          Sort By
                        </h5>
                        <button
                          type='button'
                          className='close'
                          data-dismiss='modal'
                          aria-label='Close'
                        >
                          <span aria-hidden='true'>×</span>
                        </button>
                      </div>
                      <div className='modal-body selectbox'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='exampleRadios'
                            id='Polularity'
                            defaultValue='option1'
                            defaultChecked
                          />
                          <label
                            className='form-check-label'
                            htmlFor='Polularity'
                          >
                            <span className='labtext'> Popularity</span>
                          </label>
                        </div>
                      </div>
                      <div className='modal-body selectbox'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='exampleRadios'
                            id='Hightolow'
                            defaultValue='option1'
                            defaultChecked
                          />
                          <label
                            className='form-check-label'
                            htmlFor='Hightolow'
                          >
                            <span className='labtext'>
                              {' '}
                              Price -- High to Low{' '}
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className='modal-body selectbox'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='exampleRadios'
                            id='LowtoHigh'
                            defaultValue='option1'
                            defaultChecked
                          />
                          <label
                            className='form-check-label'
                            htmlFor='LowtoHigh'
                          >
                            <span className='labtext'>
                              {' '}
                              Price -- Low to High
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className='modal-body selectbox'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='exampleRadios'
                            id='Newest'
                            defaultValue='option1'
                            defaultChecked
                          />
                          <label className='form-check-label' htmlFor='Newest'>
                            <span className='labtext'> Newest First</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filer_data">
        <div className="menu_overlay_filter" />
        <div className="filter_panel">
          <div className="filtertop">
            <div className="backbtn">
              <img src="image/filter/back.svg" />
            </div>
            <h4><img src="image/filter/fill-inside.svg" /> Filter</h4> </div>
          <div className="choosefilter">
            <div className="row no-gutters">
              <div className="col-5">
                <div className="categheading">
                  <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-category" role="tab" aria-controls="v-pills-home" aria-selected="true">Category <span className="dot" /></a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-brands" role="tab" aria-controls="v-pills-profile" aria-selected="false">Brands</a>
                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-price" role="tab" aria-controls="v-pills-messages" aria-selected="false">Price</a> </div>
                </div>
              </div>
              <div className="col-7">
                <div className="categlist">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-category" role="tabpanel" aria-labelledby="v-pills-home-tab">
                      <div className="choosefilter">
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="phone1" />
                            <label className="form-check-label" htmlFor="phone1"> Feature Phones </label>
                          </div>
                          <div className="itemlist"> <span>40</span> </div>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="phone2" />
                            <label className="form-check-label" htmlFor="phone2"> Smart Phones </label>
                          </div>
                          <div className="itemlist"> <span>50</span> </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-brands" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      <div className="choosefilter">
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="OnePlus" />
                            <label className="form-check-label" htmlFor="OnePlus"> OnePlus </label>
                          </div>
                          <div className="itemlist"> <span>50</span> </div>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="Nokia" />
                            <label className="form-check-label" htmlFor="Nokia"> Nokia </label>
                          </div>
                          <div className="itemlist"> <span>70</span> </div>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="Apple" />
                            <label className="form-check-label" htmlFor="Apple"> Apple </label>
                          </div>
                          <div className="itemlist"> <span>50</span> </div>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="Iphone" />
                            <label className="form-check-label" htmlFor="Iphone"> Iphone </label>
                          </div>
                          <div className="itemlist"> <span>20</span> </div>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="Samsung" />
                            <label className="form-check-label" htmlFor="Samsung"> Samsung </label>
                          </div>
                          <div className="itemlist"> <span>10</span> </div>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="Realme" />
                            <label className="form-check-label" htmlFor="Realme"> Realme </label>
                          </div>
                          <div className="itemlist"> <span>22</span> </div>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="MI" />
                            <label className="form-check-label" htmlFor="MI"> MI </label>
                          </div>
                          <div className="itemlist"> <span>21</span> </div>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="Coolpad" />
                            <label className="form-check-label" htmlFor="Coolpad"> Coolpad </label>
                          </div>
                          <div className="itemlist"> <span>33</span> </div>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="Lenovo" />
                            <label className="form-check-label" htmlFor="Lenovo"> Lenovo </label>
                          </div>
                          <div className="itemlist"> <span>33</span> </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-price" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                      <div className="choosefilter">
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="price1" />
                            <label className="form-check-label" htmlFor="price1"> Under 500 </label>
                          </div>
                          <div className="itemlist"> <span>50</span> </div>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="price2" />
                            <label className="form-check-label" htmlFor="price2"> Under 501 - 1000 </label>
                          </div>
                          <div className="itemlist"> <span>50</span> </div>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="price3" />
                            <label className="form-check-label" htmlFor="price3"> Under 1001 - 5000 </label>
                          </div>
                          <div className="itemlist"> <span>50</span> </div>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="price4" />
                            <label className="form-check-label" htmlFor="price4"> Under 1001 - 5000 </label>
                          </div>
                          <div className="itemlist"> <span>50</span> </div>
                        </div>
                        <div className="min-max">
                          <div className="form-group d-flex">
                            <input className="form-control" type="text" placeholder="Min" />
                            <span className="too">to</span>
                            <input className="form-control" type="text" placeholder="Max" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="applyfilter">
                  <button type="button" className="btn btn-outline-primary">Clear Filter</button>
                  <button type="button" className="btn btn-danger">Apply Filter</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
