import React, { Component } from 'react'

export default class IssueList extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '', description: '' }
  }
  onChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <fieldset>
          <legend>Create Issue</legend>
          <input type="text" value={this.state.title} onChange={this.onChangeTitle.bind(this)} placeholder="Input title" />
          <textarea value={this.state.description} onChange={this.onChangeDescription.bind(this)} placeholder="Input description" />
          <button>Save</button>
        </fieldset>
      </form>
    )
  }
}
