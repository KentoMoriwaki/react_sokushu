import Express from 'express'
import issueApi from './api/issues'

const app = Express()
const port = 3000

function handler(req, res) {
  res.send('Hello world')
}

app.use(Express.static('static'))
app.use('/api/issues', issueApi)
app.use(handler)

app.listen(port)
