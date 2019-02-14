const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const queryParser = require('express-query-int')
const server = express()

const allowCors = require('../config/cors')

server.use(bodyParser.urlencoded({ extended: true} ))
server.use(bodyParser.json())
server.use(queryParser())
server.use(allowCors)

server.listen(port, () => {
    console.log(`Backend is running on port ${port}!`)
})

module.exports = server