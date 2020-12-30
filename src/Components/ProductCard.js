import React, { Fragment } from 'react';

export const ProductCard = (props) => {
  return (
    <Fragment>
      <div className='flasebox' style={{ marginTop: '5px' }}>
        {props.outOfStock ? 
        <div>
          <div className="out-of-stock" style={{position:"absolute",zIndex:"8",backgroundColor:"gainsboro",opacity:"0.7",height:"97%",width:"87%",top:"0.4rem",left:"1rem"}}>
          </div>
          <button type="button" class="btn btn-outline-danger out-of-stock-button" style={{margin:"1rem 0",borderColor:"#c2172e",color:"#c2172e",padding:"0.4rem 1rem",position:"absolute",top:"40%",left:"8.5%",width:"86%",opacity:"1 !important",backgroundColor:"white",zIndex:"10"}}>Out Of Stock</button>
        </div>
          : null
        }
        <img
          src='/image/home/flash/img1.png'
          className='img-fluid'
          alt='img1'
        />
        { props.type=="wish" ? <i class='bx bx-x' style={{position:"absolute",zIndex:"10",top:"1rem",left:"83%",color:"white",borderRadius:"50%",backgroundColor:"#c2172e"}}></i> : null}
       
        <div className='txt'>
          <p className='productn'>
            Realme Mobile Ram 4GB, 64GB, 660 Processer...
          </p>
          <div className='price d-flex float-left'>
            <p className='m-price'>
              <i className='fas fa-rupee-sign' /> 599
            </p>
            <span className='full-p'>
              <i className='fas fa-rupee-sign' /> 899
            </span>
            <span className='offp'>50%</span>
          </div>
          <div
            className='rateing text-right'
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '0.5rem'
            }}
          >
            <p className='rate'>
              <img
                src='/image/star.svg'
                style={{ display: 'inline' }}
                className='star'
                alt='star'
              />{' '}
              <span>4.2</span>
            </p>
          </div>
        </div>

      </div>
    </Fragment>
  );
};
