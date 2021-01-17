import Express from 'express'
import * as http from 'http'

const PORT = 3000
const HOST = '0.0.0.0'

// Specifies the max length of the queue of pending connections
const BACKLOG = 551

export default (app: Express.Application) => {
  const server = http.createServer(app)

  server.listen(PORT, HOST, BACKLOG, function() {
    console.log(`Fuji is started! Running on http://${HOST}:${PORT}`)
  })
}