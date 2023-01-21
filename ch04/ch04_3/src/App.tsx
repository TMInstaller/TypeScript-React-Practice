// 269p 기본 앱 파일 작성하기
import Callback from './pages/Callback'
import HighOrderCallback from './pages/HighOrderCallback'
import Memo from './pages/Memo'
import UseOrCreateTest from './pages/UseOrCreateTest'

export default function App() {
  return (
    <div>
      <HighOrderCallback />
      <Callback />
      <Memo />
      <UseOrCreateTest />
    </div>
  )
}
