// 452p 타입 선언하기
import type { Action } from 'redux'
import type { UUID } from '../commonTypes'
export * from '../commonTypes'

export type State = UUID[]
export type SetListidOrders = Action<'@listidOrders/set'> & {
  payload: State
}
export type AddListidToOrders = Action<'@listidOrders/add'> & { payload: UUID }
export type RemoveListidFromOrders = Action<'@listOrders/remove'> & {
  payload: UUID
}

export type Actions =
  | SetListidOrders
  | AddListidToOrders
  | RemoveListidFromOrders
