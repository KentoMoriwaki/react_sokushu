export function getIssues() {
  return [
    { id: 1, title: 'First Issue', description: 'aaa' },
    { id: 2, title: 'Incident Error', description: 'bbb' },
  ]
}

export function issuesHandler(req, res) {
  res.send(getIssues())
}
