type Instance<T> = T extends new (...args: any[]) => any ? InstanceType<T> : T
type InstanciatedMap<T> = { [K in keyof T]: Instance<T[K]> }

export function createRootModel<T>(src: T) {
  const initial = {}
  Object.keys(src).map(key => {
    initial[key] = new src[key]()
  })
  const factory = <T>(injects: T) => {
    const injected = {}
    Object.keys(src).map(key => {
      injected[key] = new src[key](injects[key])
    })
    return { ...injected }
  }
  return { initial: initial as InstanciatedMap<T>, factory }
}
