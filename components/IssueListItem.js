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
    return (
      <div>
        <h1>{ this.props.issue.title }</h1>
        <a onClick={this.onEditClick.bind(this)}>Edit</a>
        { this.state.isEditFormVisible && <IssueEditForm issue={this.props.issue} onUpdate={this.onUpdate.bind(this)} /> }
      </div>
    )
  }
}
