export default function issuesHandler(req, res) {
  const issues = [
    { id: 1, title: 'First Issue', description: 'aaa' },
    { id: 2, title: 'Incident Error', description: 'bbb' },
  ]
  res.send(issues)
}
