import React, { Component } from 'react'

export default class IssueListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>{ this.props.issue.title }</h1>
    )
  }
}
