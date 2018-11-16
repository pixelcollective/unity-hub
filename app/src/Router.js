import React, {Component} from 'react'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import App from './App';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Redirect from='*' to='/'/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router