import React, { Component } from 'react'

export default class IssueForm extends Component {
  constructor(props) {
    super(props)
    this.state = this.createEmptyState()
  }
  createEmptyState() {
    return {
      title: '',
      description: ''
    }
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState(this.createEmptyState())
  }
  onTitleChange(e) {
    this.setState(Object.assign({}, this.state, {title: e.target.value}))
  }
  onDescriptionChange(e) {
    this.setState(Object.assign({}, this.state, {description: e.target.value}))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <fieldset>
            <legend>Create Issue</legend>
            <input type="text" value={this.state.title} onChange={this.onTitleChange.bind(this)} placeholder="Input title" />
            <textarea value={this.state.description} onChange={this.onDescriptionChange.bind(this)} placeholder="Input description" />
            <button>Save</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
