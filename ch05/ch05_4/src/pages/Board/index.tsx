// 448p 목록 생성기를 화면에 보이기
// 457p 보드 수정하기(listidOrders와 listEntities 적용)
// 459p Board에 BoardList 반영하기
// 462p useLists 훅으로 간결해진 Board 컴포넌트
// 482p 드래그 앤 드롭으로 목록 옮기기 추가
// 485p ListDroppable 적용하기
// 487p DragDropContext 추가하기
import { useMemo } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { Title } from '../../components'
import CreateListForm from './CreateListForm'
import BoardList from '../BoardList'
import { ListDroppable } from '../../components'

import { useLists } from '../../store/useLists'

export default function Board() {
  const { lists, onRemoveList, onCreateList, onMoveList, onDragEnd } =
    useLists()

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
      <DragDropContext onDragEnd={onDragEnd}>
        <ListDroppable className="flex flex-row p-2 mt-4">
          <div className="flex flex-wrap p-2 mt-4">
            {children}
            <CreateListForm onCreateList={onCreateList} />
          </div>
        </ListDroppable>
      </DragDropContext>
    </section>
  )
}
