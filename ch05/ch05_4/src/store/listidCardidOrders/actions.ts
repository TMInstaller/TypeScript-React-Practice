// 467p 액션 생성기 작성하기
import type * as T from './types'

export const setListidCardids = (
  payload: T.ListidCardidS
): T.SetListidCardids => ({
  type: '@listidCardids/set',
  payload,
})
export const removeListid = (payload: string): T.RemoveListidAction => ({
  type: '@listidCardids/remove',
  payload,
})

export const prependCardidToListidAction = (
  payload: T.ListidCardid
): T.PrependCardidToListidAction => ({
  type: '@listidCardids/prependCardid',
  payload,
})
export const appendCardidToListid = (
  payload: T.ListidCardid
): T.AppendCardidToListidAction => ({
  type: '@listidCardids/appendCardid',
  payload,
})
export const removeCardIdFromListId = (
  payload: T.ListidCardid
): T.RemoveCardidToListidAction => ({
  type: '@listidCardids/removeCardid',
  payload,
})
