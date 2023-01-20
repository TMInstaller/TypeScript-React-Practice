// 234p 버튼 컴포넌트 구현하기
// prettier-ignore
import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonProps = ReactButtonProps & {}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  ...buttonProps
}) => {
  return <button {...buttonProps} />
}
