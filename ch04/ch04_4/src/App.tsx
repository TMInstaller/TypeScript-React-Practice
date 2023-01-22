// 315p 기본 앱 파일 작성하기
import ClassLifecycle from './pages/ClassLifecycle'
import FetchTest from './pages/FetchTest'
import WindowResizeTest from './pages/WindowResizeTest'

export default function App() {
  return (
    <main>
      <FetchTest />
      <WindowResizeTest />
      <ClassLifecycle />
    </main>
  )
}
