// 143p 클래스 선택자 결정
import { Icon } from '../components'

export default function UsingIconWithCSSClass() {
  return (
    <div>
      <h3>UsingIconWithCSSClass</h3>
      <Icon name="home" className="text-blue" />
      <Icon
        name="check_circle_outline"
        className="text-red"
        style={{ fontSize: '50px' }}
      ></Icon>
    </div>
  )
}
