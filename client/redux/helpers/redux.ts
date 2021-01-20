import { ActionTypes, ActionCreators } from './redux_types'

function createActions<M extends { [K: string]: any }>(
  constants: string[],
  namespace: string
) {
  const types = {}
  const creators = {}
  constants.map((row: string) => {
    const type = `${namespace}${row}`
    types[row] = type
    creators[row] = payload => {
      return { type, payload }
    }
  })
  return {
    types: types as ActionTypes<M>,
    creators: creators as ActionCreators<M>
  }
}

function createReducer<S>(namespace: string) {
  return (model = {}, action): S => {
    const fn = action.type.replace(namespace, '')
    if (model[fn] !== undefined) return model[fn](action.payload)
    return model as S
  }
}

export function createActionReducer<S>(constants: string[], namespace: string) {
  const { types, creators } = createActions<S>(constants, namespace)
  const reducer = createReducer<S>(namespace)
  return { types, creators, reducer }
}
