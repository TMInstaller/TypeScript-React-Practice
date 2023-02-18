// 448p 목록 생성기를 화면에 보이기
// 457p 보드 수정하기(listidOrders와 listEntities 적용)
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Title } from '../../components'
import CreateListForm from './CreateListForm'

import * as LO from '../../store/listOrders'
import * as L from '../../store/listEntities'

export default function Board() {
  const dispatch = useDispatch()

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = { uuid, title }
      dispatch(LO.addListidToOrders(list.uuid))
      dispatch(L.addList(list))
      console.log('onCreate', uuid, title)
    },
    [dispatch]
  )
  return (
    <section className="mt-4">
      <Title>Board</Title>
      <div className="mt-4">
        <CreateListForm onCreateList={onCreateList} />
      </div>
    </section>
  )
}
