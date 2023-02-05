// 433p 액션 생성기 작성하기
import type * as T from './types'

export const setErrorMessage = (payload: T.State): T.SetErrorMessageAction => ({
  type: '@errorMessage/setErrorMessage',
  payload,
})
