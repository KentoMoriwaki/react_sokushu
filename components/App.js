import React, { Component } from 'react'

import IssueList from './IssueList'
import IssueForm from './IssueForm'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      issues: [
        { id: 1, title: 'First Issue', description: 'foobarbaz' },
        { id: 2, title: 'Incident', description: 'OMG' }
      ]
    }
  }
  onSubmit(issue) {
    let issues = this.state.issues
    issue.id = issues.length + 1
    this.setState({ issues: issues.concat(issue) })
  }
  render() {
    return (
      <div>
        <IssueList issues={this.state.issues} />
        <IssueForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}
