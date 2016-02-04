export const ADD = 'ADD_ISSUE'

export function addIssue(issue) {
  return { type: ADD, issue: issue }
}
