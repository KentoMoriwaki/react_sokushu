import React, { Component } from 'react'

export default class IssueEditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.issue.title,
      description: this.props.issue.description,
      id: this.props.issue.id
    }
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onUpdate(this.state)
  }
  onTitleChange(e) {
    let s = this.state
    s.title = e.target.value
    this.setState(s)
  }
  onDescriptionChange(e) {
    let s = this.state
    s.description = e.target.value
    this.setState(s)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" value={this.state.title} onChange={this.onTitleChange.bind(this)} placeholder="Input title" />
          <textarea value={this.state.description} onChange={this.onDescriptionChange.bind(this)} placeholder="Input description" />
          <button>Save</button>
        </form>
      </div>
    )
  }
}
