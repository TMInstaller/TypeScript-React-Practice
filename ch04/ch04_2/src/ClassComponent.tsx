// 83p 클래스 컴포넌트로 분리
import { Component, ReactNode } from 'react'

export default class ClassComponent extends Component {
  render(): ReactNode {
    return (
      <li>
        <a href="http://www.google.com">
          <p>go to Google</p>
        </a>
      </li>
    )
  }
}
