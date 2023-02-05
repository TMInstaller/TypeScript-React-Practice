// 429p 액션 생성기 작성하기
import type * as T from './types'

export const setLoading = (payload: T.State): T.SetLoadingAction => ({
  type: '@loading/setLoadingAction',
  payload,
})
