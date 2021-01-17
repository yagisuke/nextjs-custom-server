import Express from 'express'
import next from 'next'

import Config from './config'
import Pages from './pages'
import App from './app'
import Run from './run'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = Express()

function launchApp() {
  ;(async () => {
    await app.prepare()
    Config(server)
    Pages(server, app)
    App(server, app)
    Run(server)
  })()
}

launchApp()
