// 171p WidthHeight 타입 적용하기
// 184p Div component src 속성 추가
import type {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from 'react'
import { WidthHeight } from './WidthHeight'

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> & { src?: string }

export const Div: FC<DivProps> = ({
  width,
  height,
  style: _style,
  src,
  className: _className,
  ...props
}) => {
  const style = {
    ..._style,
    width,
    height,
    backgroundImage: src && `url(${src})`,
  }
  const className = ['box-sizing', src && 'bg-gray-300', _className].join('')
  return <div {...props} className={className} style={style} />
}
