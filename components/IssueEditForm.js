import React, { Component } from 'react'

export default class IssueEditForm extends Component {
  constructor(props) {
    super(props)
    this.state = this.createStateFromProps()
  }
  createStateFromProps() {
    return {
      title: this.props.issue.title,
      description: this.props.issue.description,
      id: this.props.issue.id
    }
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState(this.createStateFromProps())
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
        <form className="pure-form pure-form-stacked" onSubmit={this.onSubmit.bind(this)}>
          <fieldset>
            <legend>Create Issue</legend>
            <input type="text" value={this.state.title} onChange={this.onTitleChange.bind(this)} placeholder="Input title" />
            <textarea value={this.state.description} onChange={this.onDescriptionChange.bind(this)} placeholder="Input description" />
            <button className="pure-button pure-button-primary">Save</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
