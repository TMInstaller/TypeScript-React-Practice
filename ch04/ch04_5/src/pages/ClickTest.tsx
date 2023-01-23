// 339p 이미지 파일을 대상으로 [열기] 대화 상자 띄우기
import { useRef, useCallback } from 'react'
import { Title } from '../components'

export default function ClickTest() {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClick = useCallback(() => inputRef.current?.click(), [])

  return (
    <section className="mt-4">
      <Title>ClickTest</Title>
      <div className="flex items-center justify-center mt-4 ">
        <button onClick={onClick} className="mr-4 btn bg-primary">
          Click Me
        </button>
        <input type="file" ref={inputRef} className="hidden" accept="image/*" />
      </div>
    </section>
  )
}
