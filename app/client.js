import 'core-js/shim';
import 'regenerator/runtime';
import 'isomorphic-fetch';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import './styles/app';

if (!Object.assign) {
  Object.assign = require('object-assign');
}

/**
 * The app class is the most top-level class in the
 * entire application. The <Provider> component
 * component of the app.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.history = new BrowserHistory();

    window.react = React;
  }

  render() {
    return (
      <div className="app-container">
        <Provider store={store}>
          {() => router(this.history)}
        </Provider>
      </div>
    );
  }
}

React.render(<App />, document.querySelector('#mount'));
