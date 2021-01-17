import * as Express from 'express'
import NextServer from 'next-server/dist/server/next-server'
import { HttpError } from 'http-errors'
import { parse } from 'url'

export default (server: Express.Application, app: NextServer) => {
  server.use((_: HttpError, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    console.error('req ------------------------------------')
    console.dir(req)
    console.error('req ------------------------------------')
    
    console.error('res ------------------------------------')
    console.dir(res)
    console.error('res ------------------------------------')
    
    console.error('next ------------------------------------')
    console.dir(next)
    console.error('next ------------------------------------')

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
