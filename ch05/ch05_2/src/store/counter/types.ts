// 402p number 타입 선언하기
import type { Action } from 'redux'

export type State = number
export type SetCounterAction = Action<'@counter/setCounter'> & {
  payload: State
}
export type Actions = SetCounterAction
