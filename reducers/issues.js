import { ADD, UPDATE } from '../actions/issues'

const initialState = [
  { id: 1, title: 'First issue', author: {id: 1}, assignee: {id: 1} }
]

export default function issues(state, action) {
  if (typeof state == 'undefined') {
    return initialState
  }
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.title,
          description: action.description,
          author: action.author,
          assignee: action.assignee
        }
      ]
    case UPDATE:
      let index = state.findIndex((issue) => {
        return issue.id == action.id
      })
      let issue = Object.assign({}, state[index], action)
      delete issue.type
      return [
        ...state.slice(0, index),
        issue,
        ...state.slice(index + 1, 0)
      ]
  }
  return state
}
