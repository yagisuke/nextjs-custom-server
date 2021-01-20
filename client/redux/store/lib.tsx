import * as Express from 'express'
import React from 'react'
import { AppInitialProps, NextAppPageContext } from 'next/app'
import { AppStore } from '~client/redux/store'
import { getOrCreateStore } from '~client/redux/store/instantiate'
import { injectInitialStateToStore } from '~client/redux/store/initializer'

export const withRedux = Component => {
  return class extends React.Component<{ pageProps: any; router: any }> {
    store: AppStore
    constructor(props) {
      super(props)
      this.store = getOrCreateStore(props.initialReduxState)
    }
    static async getInitialProps(appContext: NextAppPageContext) {
      try {
        const store = getOrCreateStore()
        appContext.ctx.store = store
        let appProps: AppInitialProps = { pageProps: {} }
        if (typeof Component.getInitialProps === 'function') {
          appProps = await Component.getInitialProps(appContext)
        }
        if (appContext.ctx.req && appContext.ctx.store) {
          injectInitialStateToStore(
            appContext.ctx.req as Express.Request,
            appContext.ctx.store
          )
        }
        return {
          ...appProps,
          store,
          initialReduxState: store.getState()
        }
      } catch (err) {
        throw err
      }
    }
    render() {
      return <Component {...this.props} store={this.store} />
    }
  }
}
