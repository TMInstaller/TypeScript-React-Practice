// 234p 버튼 컴포넌트 구현하기
// 236p btn 클래스 기본으로 반영하기
// prettier-ignore
import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonProps = ReactButtonProps & {}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className: _className,
  ...buttonProps
}) => {
  const className = ['btn', _className].join(' ')
  return <button {...buttonProps} className={className} />
}
