// 448p 목록 생성기를 화면에 보이기
import { useCallback } from 'react'
import { Title } from '../../components'
import CreateListForm from './CreateListForm'

export default function Board() {
  const onCreateList = useCallback((uuid: string, title: string) => {
    console.log('onCreate', uuid, title)
  }, [])
  return (
    <section className="mt-4">
      <Title>Board</Title>
      <div className="mt-4">
        <CreateListForm onCreateList={onCreateList} />
      </div>
    </section>
  )
}
