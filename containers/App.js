import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import IssueList from '../components/IssueList'
import { addIssue, loadIssues } from '../actions/issues'

class App extends Component {
  componentDidMount() {
    let dispatch = this.props.dispatch
    dispatch(loadIssues())
  }

  onAdd(issue) {
    this.props.dispatch(addIssue(issue))
  }

  render() {
    const { dispatch, issues } = this.props
    return (
      <div>
        <IssueList issues={issues} onAdd={this.onAdd.bind(this)} onUpdate={this.props.updateIssue} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    issues: state.issues
  }
}

export default connect(mapStateToProps)(App)
