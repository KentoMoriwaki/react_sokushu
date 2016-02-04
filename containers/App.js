import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import IssueList from '../components/IssueList'
import { addIssue } from '../actions/issues'

class App extends Component {
  onAdd(issue) {
    //TODO: Dispatch addIssue action!
  }

  render() {
    return (
      <div>
        <IssueList issues={this.props.issues} onAdd={this.onAdd.bind(this)} onUpdate={this.props.updateIssue} />
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