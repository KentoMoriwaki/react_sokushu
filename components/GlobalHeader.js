import React, { Component } from 'react'

export default class GlobalHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'all'
    }
  }

  render() {
    return (
      <div className="header">
        <div className="pure-menu pure-menu-horizontal">
          <span className="pure-menu-heading">React Issue!</span>
          <ul className="pure-menu-list">
            <li className="pure-menu-item pure-menu-selected">
              <a href="#" className="pure-menu-link">All Issue</a>
            </li>
            <li className="pure-menu-item">
              <a href="#" className="pure-menu-link">Your Issue</a>
            </li>
            <li className="pure-menu-item">
              <a href="#" className="pure-menu-link">Issue assigned to you</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
