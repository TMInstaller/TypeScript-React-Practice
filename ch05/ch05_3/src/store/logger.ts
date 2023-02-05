// 423p 로거 미들웨어 구현하기
import { Action, Dispatch } from '@reduxjs/toolkit'

export default function logger<S = any>({ getState }: { getState: () => S }) {
  return (next: Dispatch) => (action: Action) => {
    console.log('state before next', getState())
    console.log('action', action)
    const returnedAction = next(action)
    console.log('state after next', getState())
    return returnedAction
  }
}
