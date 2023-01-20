// 171p WidthHeight 타입 적용하기
// 184p Div component src 속성 추가
// 197p 위치 타입과 속성 추가하기
// 212p MinMaxWidthHeight 타입 반영하기
// prettier-ignore
import type { FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'
import { WidthHeight } from './WidthHeight'
import type { LeftRightTopBottom } from './LeftRightTopBottom'
import type { MinMaxWidthHeight } from './MinMaxWidthHeight'

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBottom &
  MinMaxWidthHeight & {
    src?: string
  }
// prettier-ignore
export const Div: FC<DivProps> = ({
  width, height,
  style: _style,
  src,
  className: _className,
  left, right, top, bottom,
  minWidth, maxWidth, minHeight, maxHeight,
  ...props
}) => {
  const style = {
    ..._style,
    width, height,
    backgroundImage: src && `url(${src})`,
    left, right, top, bottom,
    minWidth, maxWidth, minHeight, maxHeight
  }
  const className = ['box-sizing', src && 'bg-gray-300', _className].join('')
  return <div {...props} className={className} style={style} />
}
