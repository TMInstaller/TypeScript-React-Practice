// 363p 기본 앱 파일 작성하기
// 369p 앱 파일 수정하기
import ResponsiveContextTest from './pages/ResponsiveContextTest'
import { ResponsiveProvider } from './contexts'

export default function App() {
  return (
    <ResponsiveProvider>
      <main>
        <ResponsiveContextTest />
      </main>
    </ResponsiveProvider>
  )
}
