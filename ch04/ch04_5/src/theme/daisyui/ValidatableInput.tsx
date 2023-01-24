// 359p ValidatableInput 컴포넌트 완성하기
import type { ReactInputProps } from './Input'
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

export type ValidatableInputMethods = {
  validate: () => [boolean, string]
}
