// 399p 리듀서 작성하기
import * as T from './types'

const initialState: T.State = new Date()

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@clock/setClock':
      return action.payload
  }
  return state
}
