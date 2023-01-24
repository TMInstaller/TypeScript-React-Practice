// 374p 기본 앱 파일 작성하기
// 378p 리덕스로 시계 구현하기(초기 모습)
// 380p 리덕스로 시계 구현하기(완성)
import { Provider as ReduxProvider } from 'react-redux'
import { useStore } from './store'

import ReduxClock from './pages/ReduxClock'
import UseReducerClock from './pages/UseReducerClock'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <main className="p-8 ">
        <UseReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  )
}
