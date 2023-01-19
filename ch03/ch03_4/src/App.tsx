// 204p 기본 앱 파일
import AlignTest from './pages/AlignTest'
import CardContainer from './pages/CardContainer'
import DirectionTest from './pages/DirectionTest'
import JustifyCenterTest from './pages/JustifyCenterTest'
import MinMaxTest from './pages/MinMaxTest'
import UserContainer from './pages/UserContainer'
import WrapTest from './pages/WrapTest'

export default function App() {
  return (
    <main>
      <CardContainer />
      <UserContainer />
      <AlignTest />
      <JustifyCenterTest />
      <MinMaxTest />
      <WrapTest />
      <DirectionTest />
    </main>
  )
}
