import React, { Component } from 'react'

import GlobalHeader from './GlobalHeader'
import IssueList from './IssueList'

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalHeader />
        <IssueList />
      </div>
    )
  }
}
