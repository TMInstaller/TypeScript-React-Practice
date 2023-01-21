// 269p 기본 앱 파일 작성하기

import ArrayState from './pages/ArrayState'
import BasicForm from './pages/BasicForm'
import HighOrderRadioInputTest from './pages/HighOrderRadioInputTest'
import InputTest from './pages/InputTest'
import NumberState from './pages/NumberState'
import ObjectState from './pages/ObjectState'
import RadioInputTest from './pages/RadioInputTest'
import ShowHideModal from './pages/ShowHideModal'

export default function App() {
  return (
    <main>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HighOrderRadioInputTest />
      <RadioInputTest />
      <ShowHideModal />
      <InputTest />
      <NumberState />
    </main>
  )
}
