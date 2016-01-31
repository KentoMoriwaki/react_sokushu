import React, { Component } from 'react'

export default class UserSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedUserId: 1,
      users: [
        { id: 1, name: 'Kento Moriwaki' },
        { id: 2, name: 'Foo bar' },
        { id: 3, name: 'Bazbaz' }
      ]
    }
  }

  onChange(e) {
    var selectedUser
    this.state.users.some((user) => {
      if (user.id == e.target.value) {
        selectedUser = user
        return true
      }
      return false
    })
    this.props.onChange(selectedUser)
    this.setState({users: this.state.users, selectedUserId: selectedUser.id})
  }

  render() {
    return (
      <select value={this.state.selectedUserId} onChange={this.onChange.bind(this)}>
        { this.state.users.map((user) => {
          return <option key={user.id} value={user.id}>{user.name}</option>
        }) }
      </select>
    )
  }
}
