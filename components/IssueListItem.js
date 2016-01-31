import React, { Component } from 'react'

import IssueEditForm from './IssueEditForm'

export default class IssueListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditFormVisible: false
    }
  }

  onEditClick(e) {
    this.toggleForm()
  }
  onUpdate(issue) {
    this.props.onUpdate(issue)
    this.toggleForm()
  }
  toggleForm() {
    this.setState({isEditFormVisible: !this.state.isEditFormVisible})
  }

  render() {
    let issue = this.props.issue
    return (
      <tr>
        <td>{ issue.id }</td>
        <td>
          <a onClick={this.onEditClick.bind(this)}>{ issue.title }</a>
        </td>
        <td>{ issue.description }</td>
        <td>{ issue.author.name }</td>
        <td>{ issue.assignee.name }</td>
        { this.state.isEditFormVisible && <IssueEditForm issue={this.props.issue} onUpdate={this.onUpdate.bind(this)} /> }
      </tr>
    )
  }
}
