const express = require('express')
const app = express()
const router = express.Router()
const routes = require('./routes')(router, {});
const port = 3001

app.use('/app-test-2', routes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port} in app-test-2 v2.30`)
})