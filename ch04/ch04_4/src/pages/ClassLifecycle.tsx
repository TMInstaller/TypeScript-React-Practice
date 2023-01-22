// 316p 클래스 컴포넌트에서 상태 구현하기(초기 모습)
// 319p 1초마다 갱신하는 시계 만들기
import { Component } from 'react'
import { Title } from '../components'

export default class ClassLifecycle extends Component {
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer, // 타입스크립트가 요구하는 구현 방식
  }
  componentDidMount() {
    const duration = 1000
    const intervalId = setInterval(
      () => this.setState({ today: new Date() }),
      duration
    )
    this.setState({ intervalId })
  }
  componentWillUnmount() {
    clearInterval(this.state?.intervalId)
  }
  render() {
    const { today } = this.state
    return (
      <section className="mt-4">
        <Title>ClassLifecycle</Title>
        <div className="flex flex-col items-center mt-4">
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
        </div>
      </section>
    )
  }
}
