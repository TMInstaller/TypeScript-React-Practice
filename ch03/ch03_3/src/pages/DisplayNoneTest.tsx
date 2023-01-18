// 167p Title 컴포넌트를 사용하는 기본 파일 만들기
import { Title } from '../components'

export default function DisplayNoneTest() {
  return (
    <section className="mt-4">
      <Title>DisplayNoneTest</Title>
      <div className="mt-4">
        <p className="visible">visibility: visible text</p>
        <p className="invisible">visibility: hidden text</p>
        <p className="hidden">visibility: none text</p>
      </div>
    </section>
  )
}
