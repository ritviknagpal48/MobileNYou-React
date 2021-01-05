import React, { Fragment } from 'react';
import { Home } from './Pages/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Category } from './Pages/Category';
import { AllProducts } from './Pages/AllProducts';
import { ProductDescription } from './Pages/ProductDescription';
import { OrderSummary } from './Pages/OrderSummary';
import { AboutSeller } from './Pages/AboutSeller';
import { Variants } from './Pages/Variants';
import { Specifications } from './Pages/Specifications';
import { EmiOptions } from './Pages/EmiOptions';
import { OnePageCheckout } from './Pages/OnePageCheckout';
import { Login } from './Pages/Login';
import { Otp } from './Pages/Otp';
import { SignIn } from './Pages/SignIn';
import { SignUp } from './Pages/SignUp';
import { Review } from './Pages/Review';
import { Allreview } from "./Pages/Allreview";
import { Emptycart } from "./Pages/Emptycart";
import { Transactionerror } from "./Pages/Transactionerror";
import { Orderplaced } from "./Pages/Orderplaced";
import { Cart } from "./Pages/Cart";
import { Address } from "./Pages/Address";
import { CheckoutPage } from "./Pages/CheckoutPage";
import { FlashSalePage } from "./Pages/FlashSalePage";
import { CustomerAddress } from "./Pages/CustomerAddress";
import { Account } from "./Pages/Account";
import { Password } from "./Pages/Password";
import { Wallet } from "./Pages/Wallet";
import { Profile } from "./Pages/Profile";
import { Wishlist } from "./Pages/Wishlist"
import { EmptyWishlist } from "./Pages/EmptyWishlist"
import { OrdersList } from "./Pages/OrdersList"
import { OrderDetails } from "./Pages/OrderDetails";
import { SubmitReview } from "./Pages/SubmitReview";
import { CancellationRequest } from "./Pages/CancellationRequest";
import { CancellationConfirmed } from "./Pages/CancellationConfirmed";
import { SupportCenterIssues } from "./Pages/SupportCenterIssues";
import { SupportCenter } from "./Pages/SupportCenter";
import { ReturnRequest } from "./Pages/ReturnRequest";
import { ContactUs } from "./Pages/ContactUs";
import { Blog } from "./Pages/Blog";
import { BlogName } from "./Pages/BlogName";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import { SupportCenterQueries } from "./Pages/SupportCenterQueries";
import { Career } from "./Pages/Career";
import { BusinessIntelligence } from "./Pages/BusinessIntelligence";
import { ReferAFriend } from "./Pages/ReferAFriend";

export const Layout = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/category' component={Category}></Route>
        <Route exact path='/allproducts' component={AllProducts}></Route>
        <Route exact path='/productdescription' component={ProductDescription}></Route>
        <Route exact path='/aboutseller' component={AboutSeller}></Route>
        <Route exact path='/productvariants' component={Variants}></Route>
        <Route exact path='/productspecifications' component={Specifications}></Route>
        <Route exact path='/ordersummary' component={OrderSummary}></Route>
        <Route exact path='/emioptions' component={EmiOptions}></Route>
        <Route exact path='/onepagecheckout' component={OnePageCheckout}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/Otp' component={Otp}></Route>
        <Route exact path='/SignIn' component={SignIn}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
        <Route exact path='/review' component={Review}></Route>
        <Route exact path='/Allreview' component={Allreview}></Route>
        <Route exact path='/Emptycart' component={Emptycart}></Route>
        <Route exact path='/Transactionerror' component={Transactionerror}></Route>
        <Route exact path='/Orderplaced' component={Orderplaced}></Route>
        <Route exact path='/Cart' component={Cart}></Route>
        <Route exact path='/address' component={Address}></Route>
        <Route exact path='/checkoutpage' component={CheckoutPage}></Route>
        <Route exact path='/flashsale' component={FlashSalePage}></Route>
        <Route exact path='/customeraddress' component={CustomerAddress}></Route>
        <Route exact path='/account' component={Account}></Route>
        <Route exact path='/changepassword' component={Password}></Route>
        <Route exact path='/wallet' component={Wallet}></Route>
        <Route exact path='/profile' component={Profile}></Route>
        <Route exact path='/wishlist' component={Wishlist}></Route>
        <Route exact path='/emptywishlist' component={EmptyWishlist}></Route>
        <Route exact path='/orderslist' component={OrdersList}></Route>
        <Route exact path='/orderdetails' component={OrderDetails}></Route>
        <Route exact path='/submitreview' component={SubmitReview}></Route>
        <Route exact path='/cancellationrequest' component={CancellationRequest}></Route>
        <Route exact path='/cancellationconfirmed' component={CancellationConfirmed}></Route>
        <Route exact path='/supportcenterissues' component={SupportCenterIssues}></Route>
        <Route exact path='/supportcenter' component={SupportCenter}></Route>
        <Route exact path='/returnrequest' component={ReturnRequest}></Route>
        <Route exact path='/contactus' component={ContactUs}></Route>
        <Route exact path='/supportcenterqueries' component={SupportCenterQueries}></Route>
        <Route exact path='/blogname' component={BlogName}></Route>
        <Route exact path='/blog' component={Blog}></Route>
        <Route exact path='/privacypolicy' component={PrivacyPolicy}></Route>
        <Route exact path='/career' component={Career}></Route>
        <Route exact path='/businessintelligence' component={BusinessIntelligence}></Route>
        <Route exact path='/referafriend' component={ReferAFriend}></Route>
      </Switch>
    </Router>
  );
};
