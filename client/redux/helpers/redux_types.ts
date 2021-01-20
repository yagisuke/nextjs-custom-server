type R<T> = T extends (...rest: any[]) => infer I ? I : never
type A1<T> = T extends (a1: infer I, ...rest: any[]) => any ? I : never

type ACS<T> = () => R<T>
type CR = () => { type: ActionType }
type CRPL<T> = (payload: A1<T>) => { type: ActionType; payload: A1<T> }
type ActionCreator<T> = T extends ACS<T> ? CR : CRPL<T>
export type ActionCreators<T> = { readonly [K in keyof T]: ActionCreator<T[K]> }

type ActionType = string
export type ActionTypes<T> = { readonly [K in keyof T]: ActionType }
