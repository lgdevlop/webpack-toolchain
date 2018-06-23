const express = require('express')

const server = express()
const public = express.static('./dist')

server.use(public)

server.listen(8080, () => {
  console.log('Servidor escutando...')
})