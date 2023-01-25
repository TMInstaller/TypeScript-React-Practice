// 402p 액션 생성기 작성하기
import type * as T from './types'

export const setCounter = (payload: T.State): T.SetCounterAction => ({
  type: '@counter/setCounter',
  payload,
})
export const increaseCounter = () => setCounter(1)
export const decreaseCounter = () => setCounter(-1)
