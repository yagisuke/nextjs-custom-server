import * as Express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'

export default (server: Express.Application) => {
  // trailing slash対応
  server.use((req, res, next) => {
    if (req.path.substr(-1) === '/' && req.path.length > 1) {
      const query = req.url.slice(req.path.length)
      res.redirect(301, req.path.slice(0, -1) + query)
    } else {
      next()
    }
  })
  // Parser
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())
  server.use(cookieParser())
  // View
  server.set('view engine', 'ejs')
  // Security
  server.use(helmet())
  // for safari
  server.disable('etag')
}
