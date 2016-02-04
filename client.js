import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import app from './reducers'

const store = createStore(app)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
