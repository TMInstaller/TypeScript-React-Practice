// 461p useLists 커스텀 훅 만들기(초기 모습)
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { AppState } from '../store'
import type { List } from './commonTypes'
import * as LO from './listidOrders'
import * as L from '../store/listEntities'

export const useLists = () => {
  const dispatch = useDispatch()

  const lists = useSelector<AppState, List[]>(
    ({ listidOrders, listEntities }) =>
      listidOrders.map((uuid) => listEntities[uuid])
  )
  const onCreateList = useCallback(
    (listid: string) => () => {
      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch]
  )
  const onRemoveList = useCallback(
    (listid: string) => () => {
      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch]
  )
  return { lists, onCreateList, onRemoveList }
}
