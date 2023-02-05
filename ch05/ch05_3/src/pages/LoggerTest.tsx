// 425p 로거 테스트하기
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Title } from '../components'

export default function CopyMe() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'hello', payload: 'world' })
  }, [dispatch])

  return (
    <section className="mt-4">
      <Title>LoggerTest</Title>
      <div className="mt-4"></div>
    </section>
  )
}
