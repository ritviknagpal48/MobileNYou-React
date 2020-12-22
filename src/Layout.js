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
        <Route exact path='/ordersummary' component={OrderSummary}></Route>
        <Route exact path='/aboutseller' component={AboutSeller}></Route>
        <Route exact path='/productvariants' component={Variants}></Route>
        <Route
          exact
          path='/productspecifications'
          component={Specifications}
        ></Route>
        <Route exact path='/emioptions' component={EmiOptions}></Route>
        <Route exact path='/paymentdetails' component={PaymentDetails}></Route>
        <Route exact path='/login' component={Login}></Route>

      </Switch>
    </Router>
  );
};
