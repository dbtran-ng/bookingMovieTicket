import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import Checkout from './pages/Checkout/Checkout';
import { Suspense, lazy } from 'react';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />

        <CheckoutTemplate path="/checkout/:id" exact component={Checkout} />
        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
