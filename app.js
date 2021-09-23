const express = require('express')
const cors = require('cors')
const countapi = require('countapi-js')
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io =new Server(server)
const router = require('./routes/index.js')
const app = express()
const port = 3000

app.use(cors())
app.use(countapi())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

server.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});