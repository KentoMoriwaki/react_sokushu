import React, { Component } from 'react'
import { render } from 'react-dom'

import App from './components/App'
import IssueList from './components/IssueList'

require("./style.scss")

render(<IssueList />, document.getElementById("root"))
