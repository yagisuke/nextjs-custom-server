import { Record } from 'immutable'

export type State = {
  remote_ip: string
  source: string
}

const state = <T>(injects: T): State & T => ({
  remote_ip: '',
  source: '',
  ...injects
})

export class UserAgentModel extends Record(state({})) {
  registerSrc(src: State): this {
    return this.set('remote_ip', src.remote_ip)
      .set('source', src.source)
  }

  isApple(): boolean {
    const source = this.get('source').toLocaleLowerCase()
    return !!(
      source.match('iphone') ||
      source.match('ipad') ||
      source.match('macintosh')
    )
  }
}
