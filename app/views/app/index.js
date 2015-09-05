import React, { Component, PropTypes } from 'react';

/*
 * @class AppView
 * @description The app view class is the main container for all views.
 * It uses the Redux provider to pass down props via inheiritance.
 */
export default class AppView extends Component {
  render() {
    return this.props.children;
  }
}
