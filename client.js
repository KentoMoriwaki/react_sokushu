import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './containers/App'
import issueApp from './reducers'

const store = createStore(
  issueApp,
  applyMiddleware(thunk),
  window.__INITIAL_STATE__
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
