// 360p 이메일 형식 검증하기
import { useRef, useCallback } from 'react'
import { Title } from '../components'
import type { ValidatableInputMethods } from '../theme/daisyui'
import { ValidatableInput } from '../theme/daisyui'

export default function ValidatableInputTest() {
  const methodsRef = useRef<ValidatableInputMethods>(null)

  const validateEmail = useCallback(() => {
    if (methodsRef.current) {
      const [valid, valueOrErrorMessage] = methodsRef.current.validate()
      if (valid) alert(`${valueOrErrorMessage}는 유효한 이메일 주소입니다`)
      else alert(valueOrErrorMessage)
    }
  }, [])
}
