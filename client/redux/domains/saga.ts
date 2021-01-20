import { AppStore } from '~client/redux/store'

export default function saga(store: AppStore) {
  return function*() {
    console.log(store)
  }
}
