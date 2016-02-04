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
      let issue = action.issue
      return [
        ...state,
        {
          id: state.length + 1,
          title: issue.title,
          description: issue.description
        }
      ]
    case REFRESH:
      return action.issues
  }
  return state
}
