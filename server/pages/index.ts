import Express from 'express'
import NextServer from 'next-server/dist/server/next-server'
import A from './a'
import B from './b'
import Route from './route'

export default (server: Express.Application, app: NextServer) => {
  A(server, app)
  B(server, app)
  Route(server, app)
}
