const express = require('express')
const cors = require('cors')
const router = require('./routes/index.js')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})