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
import { PaymentDetails } from './Pages/PaymentDetails';
import {Login} from './Pages/Login';
import {Otp} from './Pages/Otp';
import {SignIn} from './Pages/SignIn';
import { SignUp } from './Pages/SignUp';
import {Review} from './Pages/Review';
import {Allreview} from "./Pages/Allreview";
import { Emptycart } from "./Pages/Emptycart";
import { Transactionerror } from "./Pages/Transactionerror";
import { Orderplaced } from "./Pages/Orderplaced";
import { Cart } from "./Pages/Cart";

export const Layout = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/category' component={Category}></Route>
        <Route exact path='/allproducts' component={AllProducts}></Route>
        <Route
          exact
          path='/productdescription'
          component={ProductDescription}
        ></Route>
        <Route exact path='/aboutseller' component={AboutSeller}></Route>
        <Route exact path='/productvariants' component={Variants}></Route>
        <Route
          exact
          path='/productspecifications'
          component={Specifications}
        ></Route>
        <Route exact path='/ordersummary' component={OrderSummary}></Route>
        <Route exact path='/emioptions' component={EmiOptions}></Route>
        <Route exact path='/paymentdetails' component={PaymentDetails}></Route>
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

      </Switch>
    </Router>
  );
};
