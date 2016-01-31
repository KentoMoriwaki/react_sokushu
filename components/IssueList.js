import React, { Component } from 'react'

import IssueListItem from './IssueListItem'
import IssueEditForm from './IssueEditForm'

export default class IssueList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emptyIssue: this.getEmptyIssue()
    }
  }
  getEmptyIssue() {
    return {
      title: '',
      description: '',
      author: { id: 1 },
      assignee: { id: 1 }
    }
  }

  onAdd(issue) {
    issue.id = this.state.issues.length + 1
    this.setState({issues: this.state.issues.concat(issue), emptyIssue: this.getEmptyIssue()})
  }
  onUpdate(updatedIssue) {
    this.setState({issues: this.state.issues.map((issue) => {
      return issue.id == updatedIssue.id ? updatedIssue : issue
    })})
  }

  render() {
    return (
      <div className="content">
        <table className="pure-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Author</th>
              <th>Assignee</th>
            </tr>
          </thead>
          <tbody>
            { this.props.issues.map((issue) => {
              return <IssueListItem key={issue.id} issue={issue} onUpdate={this.onUpdate.bind(this)}/>
            }) }
          </tbody>
        </table>
        <IssueEditForm onSubmit={(issue) => this.props.onAdd(issue)} issue={this.state.emptyIssue}/>
      </div>
    )
  }
}
