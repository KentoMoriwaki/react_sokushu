import React, { Component } from 'react'
import Radium from 'radium'
import color from 'color'

class IssueForm extends Component {
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
            <input style={[styles.input]} type="text" value={this.state.title} onChange={this.onTitleChange.bind(this)} placeholder="Input title" />
            <textarea style={[styles.input, styles.textarea]} value={this.state.description} onChange={this.onDescriptionChange.bind(this)} placeholder="Input description" />
            <button style={[styles.button]}>Save</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

const styles = {
  input: {
    display: 'block',
    width: '200px',
    padding: '6px 10px',
    margin: '10px 0',
    border: '1px solid #ccc'
  },
  textarea: {
    height: '100px'
  },
  button: {
    backgroundColor: '#00A4BB',
    border: 'none',
    padding: '6px 15px',
    color: 'white',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: color('#00A4BB').darken(0.2).hexString(),
    }
  }
}

export default Radium(IssueForm)
