import { ADD, REFRESH } from '../actions/issues'

const initialState = [
  { id: 1, title: 'First issue', author: {id: 1}, assignee: {id: 1} }
]

export default function issues(state, action) {
  if (typeof state == 'undefined') {
    return initialState
  }
  switch (action.type) {
    case ADD:
      //TODO: Add new issue
  }
  return state
}
