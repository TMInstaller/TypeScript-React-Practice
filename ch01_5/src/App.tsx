// 48p 가짜 데이터 사용해 보기
import * as D from './data'

export default function App() {
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} alt="" />
      <img src={D.randomImage()} alt="" />
    </div>
  )
}
