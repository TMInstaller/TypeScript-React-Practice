// 204p 기본 앱 파일
import AlignTest from './pages/AlignTest'
import CardContainer from './pages/CardContainer'
import JustifyCenterTest from './pages/JustifyCenterTest'
import MinMaxTest from './pages/MinMaxTest'
import UserContainer from './pages/UserContainer'

export default function App() {
  return (
    <main>
      <CardContainer />
      <UserContainer />
      <AlignTest />
      <JustifyCenterTest />
      <MinMaxTest />
    </main>
  )
}
