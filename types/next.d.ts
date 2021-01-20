import { NextPageContext } from 'next'
import { AppContext } from 'next/app'
import { AppStore } from '~client/redux/store'

declare module 'next' {
  type PageContext = {
    store: AppStore // Redux Store
  } & NextPageContext
}

declare module 'next/app' {
  type NextAppPageContext = {
    ctx: PageContext
  } & AppContext
}
