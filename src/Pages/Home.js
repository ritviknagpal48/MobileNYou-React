import React, { Fragment } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductCard } from '../Components/ProductCard';
import { ProductCarousel } from '../Components/ProductCarousel';
import { Navbar } from '../Components/Navbar';
import { BannerCarousel } from '../Components/BannerCarousel';
import { CategoryCarousel } from '../Components/CategoryCarousel';
import { PhoneUnderBanner } from '../Components/PhoneUnderBanner';
import { BottomCategories } from '../Components/BottomCategories';
import { Brands } from '../Components/Brands';
import { Footer } from '../Components/Footer';
import { Flashsale } from '../Components/Flashsale';
import { RecentlyViewed } from '../Components/RecentlyViewed';
import { MobileZone } from '../Components/MobileZone';
import { TabletZone } from '../Components/TabletZone';
import { AccessoriesZone } from '../Components/AccessoriesZone';
import { CategoryX } from '../Components/CategoryX';
import { TrippleBanner } from '../Components/Banners/TrippleBanner';
import { DoubleBanner } from '../Components/Banners/DoubleBanner';
import { SingleBanner } from '../Components/Banners/SingleBanner';

export const Home = () => {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'liner'
  };
  return (
    <Fragment>
      <div className='badydiv'>
        <div className='universalDiv'>
          <div className='container'>
            <Navbar></Navbar>
          </div>
          <section className='bodypanelmian'>
            <div className='container'>
              <div className='row no-gutters'>
                <div className='col'>
                  <div className='bodypanel'>
                    <div className='addbanner'>
                      <img src='image/home/addbtop.png' className='img-fluid' />
                    </div>
                    <BannerCarousel></BannerCarousel>
                  </div>
                </div>
              </div>
              <CategoryCarousel></CategoryCarousel>
              {/* flash sale sectoin start */}
              <Flashsale></Flashsale>
              {/* flash sale sectoin end */}
              <div className='clearfix' />
              {/* Recently viewed start */}
              <RecentlyViewed></RecentlyViewed>
              {/* Recently viewed  end */}
              <PhoneUnderBanner></PhoneUnderBanner>
              {/* Phone Under section */}
              {/* offer banner 1 */}
              <SingleBanner></SingleBanner>
              {/* offer banner 1 */}
              {/* Mobile Zone */}
              <MobileZone></MobileZone>
              {/* Mobile Zone*/}
              {/* offer banner 2 */}
              {/* Add banner4 */}
              <DoubleBanner></DoubleBanner>
              {/* offer banner 2 */}
              {/* tablet Zone */}
              <TabletZone></TabletZone>
              {/* Tablet Zone*/}
              {/* Add banner4 */}
              <TrippleBanner></TrippleBanner>
              {/* Add banner*/}
              {/* Accessories  Zone */}
              <AccessoriesZone></AccessoriesZone>
              {/* Accessories  Zone*/}
              <div className='clearfix' />
              {/* Mobile Accessories Product */}
              <BottomCategories></BottomCategories>
              {/* Mobile Accessories Product */}
              {/* Add banner4 */}
              <TrippleBanner></TrippleBanner>
              {/* Add banner*/}
              {/* Category X */}
              <CategoryX></CategoryX>
              {/*Category X*/}
              {/* Brands Section*/}
              <Brands></Brands>
              {/* Brands Section*/}
              <Footer></Footer>
            </div>
            {/* Main container and section close */}
          </section>
        </div>
      </div>
    </Fragment>
  );
};
