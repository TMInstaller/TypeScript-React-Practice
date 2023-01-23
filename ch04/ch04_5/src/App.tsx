// 335p 기본 앱 파일 작성하기
import ClickTest from './pages/ClickTest'
import FileDrop from './pages/FileDrop'
import ForwardRefTest from './pages/ForwardRefTest'
import InputFocusTest from './pages/InputFocusTest'
import InputValueTest from './pages/InputValueTest'
import ValidatableInputTest from './pages/ValidatableInputTest'

export default function App() {
  return (
    <main>
      <ValidatableInputTest />
      <ForwardRefTest />
      <InputValueTest />
      <InputFocusTest />
      <FileDrop />
      <ClickTest />
    </main>
  )
}
