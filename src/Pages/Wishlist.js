import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";
import { ProductCard } from '../Components/ProductCard';
import {Footer} from "../Components/Footer";

export const Wishlist = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{backgroundColor: '#f5f5f5'}}>
                    <RedNavbar navbar="Wishlist"></RedNavbar>
                    <div className='flashsale'>
                    <div className='row no-gutters' style={{ marginTop: '10px' }}>
                    <div className='col'>
                        <div className='flashslder'>
                        <div className='row'>
                            <div className='col-6 paddinghandle'>
                            <ProductCard type="wish"></ProductCard>
                            </div>
                            <div className='col-6 paddinghandle'>
                            <ProductCard type="wish" outOfStock="true"></ProductCard>
                            </div>
                            <div className='col-6 paddinghandle'>
                            <ProductCard type="wish" outOfStock="true"></ProductCard>
                            </div>
                            <div className='col-6 paddinghandle'>
                            <ProductCard type="wish" ></ProductCard>
                            </div>
                            <div className='col-6 paddinghandle'>
                            <ProductCard type="wish"></ProductCard>
                            </div>
                            <div className='col-6 paddinghandle'>
                            <ProductCard type="wish"></ProductCard>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer></Footer>
                </div>
            </div>
        </Fragment>
    )
}