// 254p 기본 앱 파일
// 260p useEffect 훅 사용 초기 모습
// 261p 화면 갱신 버그가 있는 버전
import { useEffect } from 'react'
import Clock from './pages/Clock'

export default function App() {
  let today = new Date()
  useEffect(() => {
    console.log('useEffect called.')
    const duration = 1000
    const id = setInterval(() => {
      today = new Date()
      console.log('today', today.toLocaleTimeString())
    }, duration)
    return () => clearInterval(id)
  }, [])
  return <Clock today={today} />
}
