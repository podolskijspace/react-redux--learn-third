import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import { Route } from 'react-router';

const App = () => {
  return (
    <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
        <AppHeader total={50}/>
        <Route path="/" exact component={MainPage}/>
        <Route path="/cart/" exact component={CartPage}/>
    </div>
  )
}

export default App;