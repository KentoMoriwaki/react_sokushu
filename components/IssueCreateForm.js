import React, { Component } from 'react'

export default class IssueCreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      issue: {
        title: '',
        description: '',
        assignee: 1
      }
    }
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.onCreate(this.state.issue)
    this.state.issue = {}
  }
  onTitleChange(e) {
    let s = this.state
    s.issue.title = e.target.value
    this.setState(s)
  }
  onDescriptionChange(e) {
    let s = this.state
    s.issue.description = e.target.value
    this.setState(s)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit(e).bind(this)}>
          <input type="text" value={this.state.issue.title} onChange={this.onTitleChange.bind(this)} placeholder="Input title" />
          <textarea value={this.state.issue.description} onChange={this.onDescriptionChange.bind(this)} placeholder="Input description" />
          <button>Create</button>
        </form>
      </div>
    )
  }
}
