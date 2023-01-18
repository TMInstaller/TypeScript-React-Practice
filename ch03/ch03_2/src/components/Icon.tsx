// 141p 아이콘 사용하기
// 143p style 속성 추가하기
// 147p 최종 Icon 컴포넌트
import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react'

type ReactSpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>
// 142p name속성 추가하기
export type IconProps = ReactSpanProps & {
  name: string
}

// prettier-ignore
export const Icon: FC<IconProps> = ({ name, className: _className, ...props }) => {
  const className = ['material-icons', _className].join(' ')
  return (
    <span {...props} className={className}>
      {name}
    </span>
  )
}
