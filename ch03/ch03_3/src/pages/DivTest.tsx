// 167p Title 컴포넌트를 사용하는 기본 파일 만들기
// 171p Div 컴포넌트 사용하기
import { Title, Subtitle, Div, Icon } from '../components'

export default function DivTest() {
  return (
    <section className="mt-4">
      <Title>DivTest</Title>
      <Div className="text-center text-blue-100 bg-blue-600 " height="6rem">
        <Icon name="home" className="text-3xl " />
        <Subtitle>Home</Subtitle>
      </Div>
    </section>
  )
}
