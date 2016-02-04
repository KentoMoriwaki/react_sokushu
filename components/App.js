import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '', description: '' }
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Create Issue</legend>
          <input type="text" value={this.state.title} placeholder="Input title" />
          <textarea value={this.state.description} placeholder="Input description" />
          <button>Save</button>
        </fieldset>
      </form>
    )
  }
}
