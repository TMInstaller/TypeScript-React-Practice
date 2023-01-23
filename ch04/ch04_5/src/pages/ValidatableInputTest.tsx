// 359p ValidatableInput 컴포넌트 완성하기
import type { ReactInputProps } from '../theme/daisyui'
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

export type ValidatableInputMethods = {
  validate: () => [boolean, string]
}

export const ValidatableInput = forwardRef<
  ValidatableInputMethods,
  ReactInputProps
>(({ type, className: _className, ...inputProps }, methodsRef) => {
  const className = useMemo(() => ['input', _className].join(' '), [_className])
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(
    methodsRef,
    () => ({
      validate: (): [boolean, string] => {
        const value = inputRef.current?.value
        if (!value || !value.length)
          return [false, '사용자가 입력한 내용이 없습니다']

        switch (type) {
          case 'email': {
            const regEx =
              /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
            const valid = regEx.test(value)
            return valid ? [true, value] : [false, '틀린 이메일 주소입니다']
          }
        }
        return [true, value]
      },
    }),
    [type]
  )

  return <input {...inputProps} className={className} ref={inputRef} />
})
