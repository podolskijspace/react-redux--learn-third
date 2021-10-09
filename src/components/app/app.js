import React, {Component} from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested} from '../../actions';
import { Route } from 'react-router';
import Spinner from "../spinner";
import './app.scss';

class App extends Component {
  componentDidMount () {
    this.props.menuRequested();
    const {RestoService} = this.props;

    // RestoService.getGoods({id: ["0c4aab30", "1efa7e46"]})
    //   .then(res => this.props.menuLoaded(res));

    RestoService.getGoods()
      .then(res => this.props.menuLoaded(res));
  }

  render () {
    const {orderPrice, loading} = this.props;

    if (loading) {
      return <Spinner />
    }

    return (
      <div style={{background: `rgba(0,0,0, .4)`}} className="app">
        <AppHeader total={orderPrice}/>
        <Route path="/" exact component={MainPage}/>
        <Route path="/cart/" exact component={CartPage}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    orderPrice: state.orderPrice
  }
}

const mapDispatchToProps = {
    menuLoaded, menuRequested
  }


export default WithRestoService () (connect(mapStateToProps, mapDispatchToProps)(App));