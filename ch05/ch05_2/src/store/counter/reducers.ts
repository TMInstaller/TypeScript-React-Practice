// 403p 리듀서 작성하기
import * as T from './types'

const initialState: T.State = 0

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@counter/setCounter':
      return state + action.payload
  }
  return state
}
