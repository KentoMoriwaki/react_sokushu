import React, { Component } from 'react'

import IssueList from './IssueList'
import IssueForm from './IssueForm'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      issues: [
        { id: 1, title: 'First Issue', description: 'foobarbaz' }
      ]
    }
  }
  render() {
    return (
      <div>
        <IssueList />
        <IssueForm />
      </div>
    )
  }
}
