// 394p 기본 앱 파일
// 397p 앱 파일에 컴포넌트 추가하기
import { Provider as ReduxProvider } from 'react-redux'
import { useStore } from './store'
import CardsTest from './pages/CardsTest'
import ClockTest from './pages/ClockTest'
import CounterTest from './pages/CounterTest'
import RemoteUserTest from './pages/RemoteUserTest'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <main className="p-8 ">
        <CardsTest />
        <RemoteUserTest />
        <CounterTest />
        <ClockTest />
      </main>
    </ReduxProvider>
  )
}
