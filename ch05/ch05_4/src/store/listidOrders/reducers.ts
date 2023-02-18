// 453p 리듀서 작성하기
import * as T from './types'

const initialState: T.State = []

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@listidOrders/set':
      return action.payload
    case '@listidOrders/add':
      return [...state, action.payload]
    case '@listOrders/remove':
      return state.filter((uuid) => uuid !== action.payload)
  }
  return state
}
