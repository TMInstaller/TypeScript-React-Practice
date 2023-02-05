// 434p 리듀서 작성하기
import * as T from './types'

const initialState: T.State = ''

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@errorMessage/setErrorMessage':
      return action.payload
  }
  return state
}
