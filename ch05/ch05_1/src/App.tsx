// 374p 기본 앱 파일 작성하기
import ReduxClock from './pages/ReduxClock'
import UseReducerClock from './pages/UseReducerClock'

export default function App() {
  return (
    <main className="p-8 ">
      <UseReducerClock />
      <ReduxClock />
    </main>
  )
}
