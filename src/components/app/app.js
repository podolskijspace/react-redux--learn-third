import React, {Component} from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import { connect } from 'react-redux';

import { Route } from 'react-router';

class App extends Component {
  render () {
    const {orderPrice} = this.props;

    return (
      <div style={{background: `rgba(0,0,0, .4)`}} className="app">
        <AppHeader total={orderPrice}/>
        <Route path="/" exact component={MainPage}/>
        <Route path="/cart/" exact component={CartPage}/>
      </div>
    )
  }
}

const mapStateToProps = ({orderPrice}) => {
  return {
    orderPrice,
  }
}


export default connect(mapStateToProps)(App);