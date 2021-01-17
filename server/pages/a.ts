import Express from 'express'

export default (server: Express.Application) => {
  server.get('/a', () => {
    throw new Error('hello')
  })
}
