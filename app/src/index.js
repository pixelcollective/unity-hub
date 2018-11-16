import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './Store';
import Router from './Router';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
