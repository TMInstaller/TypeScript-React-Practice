// 454p 액션 생성기 작성하기
import type * as T from './types'

export const addList = (payload: T.List): T.AddListAction => ({
  type: '@listEntities/add',
  payload,
})
export const removeList = (payload: string): T.RemoveListAction => ({
  type: '@listEntities/remove',
  payload,
})
