import Express from 'express'
import NextServer from 'next-server/dist/server/next-server'

export default (server: Express.Application, app: NextServer) => {
  server.get('/a', (req, res) => {
    console.debug(req, res, app)
    throw new Error('hello')
    // app.render(req, res, '/a')
  })
}
