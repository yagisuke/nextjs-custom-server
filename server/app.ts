import * as Express from 'express'
import { HttpError } from 'http-errors'
import { parse } from 'url'
import NextServer from '~types/next-server'

export default (server: Express.Application, app: NextServer) => {
  server.use((_error: HttpError, req: Express.Request, res: Express.Response, _next: Express.NextFunction) => {
    // apiの場合はjsonで返してあげる
    if (req.headers['content-type'] === 'application/json') {
      res.status(404).json({ message: 'hoge' })
      return
    }
    app.render(req, res, '/_error/custom', {
      message: 'hoge'
    })
    return
  })
  server.use((req: Express.Request, res: Express.Response) => {
    const handle = app.getRequestHandler()
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
    return
  })
}
