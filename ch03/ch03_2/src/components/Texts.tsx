// 162p 텍스트 관련 컴포넌트 구현하기
import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import { makeClassName } from './textUtil'

type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export type TitleProps = TextProps & {
  numberOfLines?: number
}
export const Title: FC<TitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    'font-bold text-5xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export type SubTitleProps = TitleProps & {}
export const SubTitle: FC<SubTitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    'font-semibold text-3xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export type SummaryProps = SubTitleProps & {}
export const Summary: FC<SummaryProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    'text-sm whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export type ParagraphProps = SummaryProps & {}
export const Paragraph: FC<ParagraphProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    'cont-normal text-base whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}
