const express = require('express')
const server = express()
const public = express.static('./dist')

const PORT = process.env.PORT || 8080

server.use(public)

server.listen(PORT, () => {
  console.log('Servidor escutando...')
})
