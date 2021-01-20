import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import { Provider } from 'react-redux'
import { AppStore } from '~client/redux/store'
import { withRedux } from '~client/redux/store/lib'

export default withRedux(
  class extends App<{ store: AppStore }> {
    screenLog = () => {
      const { pageProps, store, router } = this.props
      const screenName = pageProps.screenName || router.pathname.slice(1) || '/'
      console.log(`screenName: ${screenName}`)
      console.log(`store: ${store.getState().userAgent.source}`)
    }

    componentDidMount() {
      this.screenLog()

      Router.events.on('routeChangeComplete', () => {
        window.scrollTo(0, 0)
        this.screenLog()
      })
    }

    render() {
      const { Component, pageProps, store } = this.props
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      )
    }
  }
)
