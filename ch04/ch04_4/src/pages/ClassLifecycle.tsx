// 316p 클래스 컴포넌트에서 상태 구현하기(초기 모습)
import { Component } from 'react'
import { Title } from '../components'

export default class ClassLifecycle extends Component {
  render() {
    const today = new Date()
    return (
      <section className="mt-4">
        <Title>ClassLifecycle</Title>
        <div className="flex flex-col items-center mt-4">
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
        </div>
      </section>
    )
  }
}
