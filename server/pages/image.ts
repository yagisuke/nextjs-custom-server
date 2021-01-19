import Express from 'express'

export default (server: Express.Application) => {
  server.get('/image', (_req, _res, next) => {
    next()
  })
}
