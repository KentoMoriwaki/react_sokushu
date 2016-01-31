import React, { Component } from 'react'

export default class IssueCreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = this.defaultState()
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onCreate(this.state.issue)
    this.setState(this.defaultState())
  }
  onTitleChange(e) {
    let issue = this.state.issue
    this.setState({issue: { title: e.target.value, description: issue.description, assignee: issue.assignee }})
  }
  onDescriptionChange(e) {
    let issue = this.state.issue
    this.setState({issue: { title: issue.title, description: e.target.value, assignee: issue.assignee }})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" value={this.state.issue.title} onChange={this.onTitleChange.bind(this)} placeholder="Input title" />
          <textarea value={this.state.issue.description} onChange={this.onDescriptionChange.bind(this)} placeholder="Input description" />
          <button className="pure-button pure-button-primary">Create</button>
        </form>
      </div>
    )
  }
}
