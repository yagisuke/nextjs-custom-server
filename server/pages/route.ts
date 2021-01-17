import Express from 'express'
import NextServer from 'next-server/dist/server/next-server'

export default (server: Express.Application, app: NextServer) => {
  server.get('/route/ids/:id', (_req, _res, next) => {
    next()
  })
  server.get('/route/types/:type', (req, res) => {
    const type = req.params.type
    app.render(req, res, `/route/types/${type}`, {
        types: [type]
    })
  })
}
