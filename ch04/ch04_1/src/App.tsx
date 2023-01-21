// 266p useClock 커스텀 훅으로 만든 시계
import { useClock } from './hooks'
import Clock from './pages/Clock'

export default function App() {
  const today = useClock()
  return <Clock today={today} />
}
