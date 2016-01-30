import React, { Component } from 'react'

import IssueListItem from './IssueListItem'
import IssueCreateForm from './IssueCreateForm'

export default class IssueList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      issues: [
        { id: 1, title: 'First issue', author: 1 }
      ]
    }
  }
  onCreate(issue) {
    issue.id = this.state.issues.length + 1
    this.setState({issues: this.state.issues.concat(issue)})
  }
  onUpdate(updatedIssue) {
    this.setState({issues: this.state.issues.map((issue) => {
      return issue.id == updatedIssue.id ? updatedIssue : issue
    })})
  }

  render() {
    return (
      <div>
        <ul>
          { this.state.issues.map((issue) => {
            return <IssueListItem key={issue.id} issue={issue} onUpdate={this.onUpdate.bind(this)}/>
          }) }
        </ul>
        <IssueCreateForm onCreate={this.onCreate.bind(this)} />
      </div>
    )
  }
}
