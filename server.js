import Express from 'express'

const app = Express()
const port = 3000

function handler(req, res) {
  res.send('Hello world')
}

app.use(handler)

app.listen(port)
