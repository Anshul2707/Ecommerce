  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './Components/HomePage/HomePagee';
import ShopPage from './Components/Shop/Shop';
import SignInAndSignUpPage from './Components/Sign/sign';
import Header from './Components/Header/headerr';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;