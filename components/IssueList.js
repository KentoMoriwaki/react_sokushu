import React, { Component } from 'react'

export default class IssueList extends Component {
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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          { this.state.issues.map((issue) => {
            return (
              <tr key={issue.id}>
                <td>{issue.id}</td>
                <td>{issue.title}</td>
                <td>{issue.description}</td>
              </tr>
            )
          }) }
        </tbody>
      </table>
    )
  }
}
