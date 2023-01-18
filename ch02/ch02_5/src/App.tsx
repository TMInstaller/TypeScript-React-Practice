// 99p 앱 파일 작성
import EventListener from './pages/EventListener'
import DragDrop from './pages/DragDrop'
import FileDrop from './pages/FileDrop'
import FileInput from './pages/FileInput'
import OnChange from './pages/OnChange'
import VariousInputs from './pages/VariousInputs'
import StopPropagation from './pages/StopPropagation'
import EventBubbling from './pages/EventBubbling'
import DispatchEvent from './pages/DispatchEvent'
import ReactOnClick from './pages/ReactOnClick'
import OnClick from './pages/OnClick'

export default function App() {
  return (
    <div>
      <FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      {/* 110p 앱 파일 수정 */}
      {/* <DispatchEvent />
      <ReactOnClick />
      <OnClick />
      <EventListener /> */}
    </div>
  )
}
