import Express from 'express'
import NextServer from '~types/next-server'
import Image from './image'
import Route from './route'
import Simple from './simple'

export default (server: Express.Application, app: NextServer) => {
  Image(server)
  Route(server, app)
  Simple(server, app)
}
