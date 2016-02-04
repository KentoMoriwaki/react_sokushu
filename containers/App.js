import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import IssueList from '../components/IssueList'
import { addIssue } from '../actions/issues'

class App extends Component {
  render() {
    const { dispatch, issues } = this.props
    return (
      <div>
        <IssueList issues={issues} onAdd={this.props.onAdd} onUpdate={this.props.updateIssue} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    issues: state.issues
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (issue) => {
      dispatch(addIssue(issue))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
