import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Ebutton from './components/eButton';
import Login from './container/Login';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  isShowButton = false;

  showMessage(){
    alert('Enggar Tampan dan menawan');
  }

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/login' component={Login} />
        
        {this.isShowButton ? <Ebutton event={this.showMessage} displayText="Login"/>:""}

      </Layout>   
    );
  }
}
