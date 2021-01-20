import { Store } from 'redux'
import rootModel from '~client/redux/domains/models'

export type AppStoreState = typeof rootModel['initial']
export type AppStore = Store<AppStoreState>
