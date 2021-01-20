import * as Express from 'express'
import { AppStore } from '~client/redux/store'
// ______________________________________________________
//
// @ Injector

export function injectInitialStateToStore(
  req: Express.Request,
  store: AppStore
) {
  store.dispatch({
    type: '/domains/userAgent/registerSrc',
    payload: {
      remote_ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || '',
      source: req.headers['user-agent'] || '',
    }
  })
}
