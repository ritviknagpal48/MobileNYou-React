import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { EmiTable } from '../Components/EmiOptions Page/EmiTable';

export const EmiOptions = () => {
  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv'>
          <div class='container'>
            <Navbar></Navbar>
            <section
              className='bodypanelmian'
              style={{ marginRight: '1%', marginLeft: '1%' }}
            >
              <div
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: '0.5px solid gainsboro',
                  color: '#444',
                  padding: '10px',
                  width: '100%',
                  textAlign: 'left',
                  outline: 'none',
                  borderRadius: '2px',
                  marginBottom: '2%',
                  fontSize: '15px',
                  transition: '0.4s',
                  boxShadow: '4px 5px 6px rgba(207, 207, 207, 0.5)'
                }}
              >
                <center>EMI Details</center>
              </div>
              <button
                className='accordion'
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: '0.5px solid gainsboro',
                  color: '#444',
                  cursor: 'pointer',
                  padding: '12px',
                  width: '100%',
                  textAlign: 'left',
                  outline: 'none',
                  borderRadius: '2px',
                  marginBottom: '2%',
                  fontSize: '15px',
                  transition: '0.4s'
                }}
              >
                <img
                  src='./icons/Hdfc-Logo.png'
                  style={{
                    border: '0.5px solid gainsboro',
                    height: '10%',
                    width: '10%',
                    marginRight: '0.5rem'
                  }}
                />
                HDFC Bank{' '}
                <i
                  style={{ float: 'right', fontSize: '27px', color: '#c2172e' }}
                  className='bx bx-chevron-down'
                />
              </button>
              <EmiTable></EmiTable>
              <button
                className='accordion'
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: '0.5px solid gainsboro',
                  color: '#444',
                  cursor: 'pointer',
                  padding: '12px',
                  marginBottom: '2%',
                  width: '100%',
                  textAlign: 'left',
                  outline: 'none',
                  borderRadius: '2px',
                  fontSize: '15px',
                  transition: '0.4s'
                }}
              >
                <img
                  src='./icons/Axis-Bank-PNG-Icon-715x715.png'
                  style={{
                    border: '0.5px solid gainsboro',
                    height: '10%',
                    width: '10%',
                    marginRight: '0.5rem'
                  }}
                />
                Axis Bank{' '}
                <i
                  style={{ float: 'right', fontSize: '27px', color: '#c2172e' }}
                  className='bx bx-chevron-down'
                />
              </button>
              <EmiTable></EmiTable>
              <button
                className='accordion'
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: '0.5px solid gainsboro',
                  color: '#444',
                  cursor: 'pointer',
                  marginBottom: '2%',
                  padding: '12px',
                  width: '100%',
                  textAlign: 'left',
                  outline: 'none',
                  borderRadius: '2px',
                  fontSize: '15px',
                  transition: '0.4s'
                }}
              >
                <img
                  src='./icons/SBI.jpeg'
                  style={{
                    border: '0.5px solid gainsboro',
                    height: '10%',
                    width: '10%',
                    marginRight: '0.5rem'
                  }}
                />
                Kotak Bank{' '}
                <i
                  style={{ float: 'right', fontSize: '27px', color: '#c2172e' }}
                  className='bx bx-chevron-down'
                />
              </button>
              <EmiTable></EmiTable>
              <button
                className='accordion'
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: '0.5px solid gainsboro',
                  color: '#444',
                  cursor: 'pointer',
                  marginBottom: '2%',
                  padding: '12px',
                  borderRadius: '2px',
                  width: '100%',
                  textAlign: 'left',
                  outline: 'none',
                  fontSize: '15px',
                  transition: '0.4s'
                }}
              >
                <img
                  src='./icons/sbi-225865.webp'
                  style={{
                    border: '0.5px solid gainsboro',
                    height: '10%',
                    width: '10%',
                    marginRight: '0.5rem'
                  }}
                />
                SBI{' '}
                <i
                  style={{ float: 'right', fontSize: '27px', color: '#c2172e' }}
                  className='bx bx-chevron-down'
                />
              </button>
              <EmiTable></EmiTable>
              <button
                className='accordion'
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: '0.5px solid gainsboro',
                  color: '#444',
                  cursor: 'pointer',
                  marginBottom: '2%',
                  padding: '12px',
                  width: '100%',
                  textAlign: 'left',
                  outline: 'none',
                  fontSize: '15px',
                  borderRadius: '2px',
                  transition: '0.4s'
                }}
              >
                <img
                  src='./icons/ICICI-Bank-PNG-Icon-715x715.png'
                  style={{
                    border: '0.5px solid gainsboro',
                    height: '10%',
                    width: '10%',
                    marginRight: '0.5rem'
                  }}
                />
                ICICI{' '}
                <i
                  style={{ float: 'right', fontSize: '27px', color: '#c2172e' }}
                  className='bx bx-chevron-down'
                />
              </button>
              <EmiTable></EmiTable>
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
