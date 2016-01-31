export const ADD = 'ADD_ISSUE'
export const UPDATE = 'UPDATE_ISSUE'

export function addIssue(issue) {
  return Object.assign({}, issue, { type: ADD })
}

export function updateIssue(issue) {
  return Object.assign({}, issue, { type: UPDATE })
}
