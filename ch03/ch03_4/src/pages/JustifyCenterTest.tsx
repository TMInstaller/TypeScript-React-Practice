// 215p 플렉스 컨테이너의 콘텐츠 조정 실습
import { Div, Title, Subtitle } from '../components'
import * as D from '../data'

export default function JustifyCenterTest() {
  const boxes = D.range(0, 5).map((index) => (
    <Div key={index} className="w-4 h-4 m-1 bg-black" minHeight="auto" />
  ))
  return (
    <section className="mt-4">
      <Title>JustifyCenterTest</Title>
      <div className="mt-4">
        <Subtitle>flex flex-row justify-center</Subtitle>
        <div className="flex flex-row justify-center h-40 bg-gray-300">
          {boxes}
        </div>
        <Subtitle>flex flex-col justify-center</Subtitle>
        <div className="flex flex-col justify-center h-40 bg-gray-300">
          {boxes}
        </div>
      </div>
    </section>
  )
}
