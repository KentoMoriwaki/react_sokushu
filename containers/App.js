import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import GlobalHeader from '../components/GlobalHeader'
import IssueList from '../components/IssueList'
import * as Actions from '../actions/issues'

class App extends Component {
  render() {
    const { dispatch, issues } = this.props
    return (
      <div>
        <GlobalHeader />
        <IssueList issues={issues} onAdd={this.props.addIssue} onUpdate={this.props.updateIssue} />
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
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
