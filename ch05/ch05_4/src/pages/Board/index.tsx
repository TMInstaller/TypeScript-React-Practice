// 448p 목록 생성기를 화면에 보이기
// 457p 보드 수정하기(listidOrders와 listEntities 적용)
// 459p Board에 BoardList 반영하기
// 462p useLists 훅으로 간결해진 Board 컴포넌트
// 482p 드래그 앤 드롭으로 목록 옮기기 추가
import { useMemo, useRef } from 'react'
import { useDrop } from 'react-dnd'
import { Title } from '../../components'
import CreateListForm from './CreateListForm'
import BoardList from '../BoardList'

import { useLists } from '../../store/useLists'

export default function Board() {
  const divRef = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: 'list',
  })
  drop(divRef)

  const { lists, onRemoveList, onCreateList, onMoveList } = useLists()

  const children = useMemo(
    () =>
      lists.map((list, index) => (
        <BoardList
          key={list.uuid}
          list={list}
          onRemoveList={onRemoveList(list.uuid)}
          index={index}
          onMoveList={onMoveList}
        />
      )),
    [lists, onRemoveList, onMoveList]
  )
  return (
    <section className="mt-4">
      <Title>Board</Title>
      <div className="flex flex-wrap p-2 mt-4 ">
        {children}
        <CreateListForm onCreateList={onCreateList} />
      </div>
    </section>
  )
}
