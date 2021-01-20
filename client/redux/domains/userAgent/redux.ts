import { createActionReducer } from '~client/redux/helpers/redux'
import { UserAgentModel } from './model'

type T = InstanceType<typeof UserAgentModel>
const { types, creators, reducer } = createActionReducer<T>(
  ['registerSrc'],
  '/domains/userAgent/'
)

export { types, creators, reducer }
