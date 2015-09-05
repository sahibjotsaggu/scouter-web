import React, { createElement } from 'react';
import { Router } from 'react-router';
import store from './store';

export default function renderRoutes(history) {
  return (
    <Router
      routes={require('./routes')}
      history={history}
      createElement={createElement}
    />
  );
}
