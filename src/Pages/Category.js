import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { BannerCarousel } from '../Components/BannerCarousel';
import { CategoryCarousel } from '../Components/Category Page/CategoryGrid';
import { BrandsCarousel } from '../Components/Category Page/BrandsCarousel';
import { Flashsale } from '../Components/Flashsale';
import { PhoneUnderBanner } from '../Components/PhoneUnderBanner';
import { TrendingProducts } from '../Components/Category Page/TrendingProducts';
import { NewMobiles } from '../Components/Category Page/NewMobiles';
import { RenewedMobiles } from '../Components/Category Page/RenewedMobiles';
import { SingleBanner } from '../Components/Banners/SingleBanner';
import { DoubleBanner } from '../Components/Banners/DoubleBanner';
import { TrippleBanner } from '../Components/Banners/TrippleBanner';
import { OpenBoxMobiles } from '../Components/Category Page/OpenBoxMobiles';
import { Footer } from '../Components/Footer';

export const Category = () => {
  return (
    <Fragment>
      <div class='badydiv'>
        <div class='universalDiv'>
          <Navbar></Navbar>
          <section className='bodypanelmian'>
            <div className='container'>
              <div className='row no-gutters'>
                <div className='col'>
                  <div className='bodypanel'>
                    <BannerCarousel></BannerCarousel>
                  </div>
                </div>
              </div>
              <CategoryCarousel></CategoryCarousel>
              <BrandsCarousel></BrandsCarousel>
              <Flashsale></Flashsale>
              <PhoneUnderBanner></PhoneUnderBanner>
              <TrendingProducts></TrendingProducts>
              <SingleBanner></SingleBanner>
              <NewMobiles></NewMobiles>
              <DoubleBanner></DoubleBanner>
              <RenewedMobiles></RenewedMobiles>
              <TrippleBanner></TrippleBanner>
              <OpenBoxMobiles></OpenBoxMobiles>
              <Footer></Footer>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};
