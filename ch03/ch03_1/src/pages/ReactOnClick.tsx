// 107p 리액트 컴포넌트의 이벤트 속성
import { SyntheticEvent } from 'react'

export default function ReactOnClick() {
  const onClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles } = e
    console.log('mouse click occurs on <button>', isTrusted, target, bubbles)
  }
  return (
    <div>
      <p>ReactOnClick</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  )
}