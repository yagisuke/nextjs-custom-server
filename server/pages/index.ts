import Express from 'express'
import NextServer from '~types/next-server'
import A from './a'
import B from './b'
import Route from './route'

export default (server: Express.Application, app: NextServer) => {
  A(server)
  B(server, app)
  Route(server, app)
}
