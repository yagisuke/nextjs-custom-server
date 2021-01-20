import Express from 'express'
import NextServer from '~types/next-server'

export default (server: Express.Application, app: NextServer) => {
  server.get('/simple', (req, res) => {
    app.render(req, res, '/simple')
  })
}
