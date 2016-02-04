import React, { Component } from 'react'

import IssueForm from './IssueForm'

export default class IssueList extends Component {

  render() {
    return (
      <div>
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
        <IssueForm onSubmit={(issue) => this.props.onAdd(issue)} />
      </div>
    )
  }
}
