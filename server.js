import Express from 'express'
import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import issueApp from './reducers'
import { getIssues, issuesHandler } from './api/issues'
import { refreshIssues } from './actions/issues'

const app = Express()
const port = 3000

function renderFullPage(html, initialState) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>React Sokushu</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
    </script>
    <script src="/dist/bundle.js"></script>
  </body>
  </html>
  `
}

function handler(req, res) {
  const store = createStore(issueApp)
  const issues = getIssues()
  store.dispatch(refreshIssues(issues))
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const initialState = store.getState()

  res.send(renderFullPage(html, initialState))
}

app.use(Express.static('static'))
app.use('/api/issues', issuesHandler)
app.use(handler)

app.listen(port)
