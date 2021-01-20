import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { AppStore } from '~client/redux/store'

import rootModel from '~client/redux/domains/models'
import rootReducer from '~client/redux/domains/reducer'
import rootSaga from '~client/redux/domains/saga'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'
const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const createReduxStore = (initialState = rootModel.initial): AppStore => {
  const store: any = createStore(
    combineReducers(rootReducer),
    rootModel.factory(initialState),
    bindMiddleware([sagaMiddleware])
  )
  store.runSagaTask = () => {
    sagaMiddleware.run(rootSaga(store))
  }
  return store
}

export function getOrCreateStore(initialState?): AppStore {
  if (isServer) {
    return createReduxStore(initialState)
  }
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = createReduxStore(initialState)
    window[__NEXT_REDUX_STORE__].runSagaTask()
  }
  return window[__NEXT_REDUX_STORE__]
}
