// 240p Input 컴포넌트 구현하기
// 354p Input 컴포넌트 수정하기
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type InputProps = ReactInputProps & {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className: _className, ...inputProps } = props
  const className = ['input', _className].join(' ')
  return <input ref={ref} {...inputProps} className={className} />
})
