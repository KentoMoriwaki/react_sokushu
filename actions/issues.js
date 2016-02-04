export const ADD = 'ADD_ISSUE'
export const LOAD = 'LOAD_ISSUES'
export const REFRESH = 'REFRESH_ISSUES'

export function addIssue(issue) {
  return { type: ADD, issue: issue }
}

export function refreshIssues(issues) {
  return { type: REFRESH, issues: issues }
}

export function loadIssues() {
  return dispatch => {
    fetch('/api/issues')
      .then(res => res.json())
      .then(json => {
        dispatch(refreshIssues(json))
      })
  }
}
