const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello from app-test-2!')
})


app.get('/test', (req, res) => {
    res.send('Testing routes app-test-2')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port} in app-test-2`)
})