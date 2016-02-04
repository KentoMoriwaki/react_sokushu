import React, { Component } from 'react'

export default class IssueList extends Component {

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
          { this.props.issues.map((issue) => {
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
