// 461p useLists 커스텀 훅 만들기(초기 모습)
// 470p useLists 훅에 반영하기
// 481p useLists 훅 수정하기(onMoveList 추가)
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { AppState } from '../store'
import type { List } from './commonTypes'
import * as LO from './listidOrders'
import * as L from '../store/listEntities'
import * as C from '../store/cardEntities'
import * as LC from '../store/listidCardidOrders'

export const useLists = () => {
  const dispatch = useDispatch()

  const lists = useSelector<AppState, List[]>(
    ({ listidOrders, listEntities }) =>
      listidOrders.map((uuid) => listEntities[uuid])
  )
  const listidCardidOrders = useSelector<AppState, LC.State>(
    ({ listidCardidOrders }) => listidCardidOrders
  )

  const listidOrders = useSelector<AppState, LO.State>(
    ({ listidOrders }) => listidOrders
  )

  const onCreateList = useCallback(
    (uuid: string, title: string) => () => {
      const list = { uuid, title }
      dispatch(LO.addListidToOrders(uuid))
      dispatch(L.addList(list))
      dispatch(LC.setListidCardIds({ listid: list.uuid, cardids: [] }))
    },
    [dispatch]
  )
  const onRemoveList = useCallback(
    (listid: string) => () => {
      listidCardidOrders[listid].forEach((cardid) => {
        dispatch(C.removeCard(cardid))
      })
      dispatch(LC.removeListid(listid))

      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch, listidCardidOrders]
  )
  const onMoveList = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newOrders = listidOrders.map((item, index) =>
        index === dragIndex
          ? listidOrders[hoverIndex]
          : index === hoverIndex
          ? listidOrders[dragIndex]
          : item
      )
      dispatch(LO.setListidOrders(newOrders))
    },
    [dispatch, listidOrders]
  )

  return { lists, onCreateList, onRemoveList, onMoveList }
}
