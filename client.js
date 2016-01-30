import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { introduction: 'My name is Kento' }
  }
  handleSubmit(e) {
    e.preventDefault()
    alert(this.state.introduction)
  }
  onChange(e) {
    this.setState({introduction: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <textarea value={this.state.introduction} onChange={(e) => this.onChange(e)}></textarea>
          <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"))
