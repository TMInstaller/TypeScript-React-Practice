// 182p margin style 속성 테스트
import { Title } from '../components'
import * as D from '../data'

const src = D.randomImage(300, 600)
export default function ImageTest() {
  return (
    <section className="mt-4">
      <Title>ImageTest</Title>
      <img src={src} className="bg-gray-300 w-[400px] h-[400px] " alt="" />
    </section>
  )
}
