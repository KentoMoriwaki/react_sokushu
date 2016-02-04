import React, { Component } from 'react'

import IssueList from './IssueList'
import IssueForm from './IssueForm'

export default class App extends Component {
  render() {
    return (
      <div>
        <IssueList />
        <IssueForm />
      </div>
    )
  }
}
