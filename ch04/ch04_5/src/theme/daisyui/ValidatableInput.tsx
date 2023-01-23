// 357p ValidatableInput 컴포넌트 구현하기
import type { ReactInputProps } from './Input'
import { forwardRef, useImperativeHandle, useMemo } from 'react'

export type ValidatableInputMethods = {}

export const ValidatableInput = forwardRef<
  ValidatableInputMethods,
  ReactInputProps
>(({ className: _className, ...inputProps }, methodRef) => {
  const className = useMemo(() => ['input', _className].join(' '), [_className])

  useImperativeHandle(methodRef, () => ({}), [])
  return <input {...inputProps} className={className} />
})
