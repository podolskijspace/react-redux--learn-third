import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import { connect } from 'react-redux';

import Background from './food-bg.jpg';
import { Route } from 'react-router';

const App = ({orderPrice}) => {
  return (
    <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
        <AppHeader total={orderPrice}/>
        <Route path="/" exact component={MainPage}/>
        <Route path="/cart/" exact component={CartPage}/>
    </div>
  )
}

const mapStateToProps = ({orderPrice}) => {
  return {
    orderPrice,
  }
}


export default connect(mapStateToProps)(App);