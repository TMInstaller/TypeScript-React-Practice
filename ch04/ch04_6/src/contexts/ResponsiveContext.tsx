// 366p 반응형 컨텍스트 구현하기(초기 모습)
// 368p ResponsiveProvider 구현하기
import type { FC, PropsWithChildren } from 'react'
import { createContext } from 'react'

type ContextType = {
  breakpoint: string // 공유할 데이터 속성
}
const defaultContextValue: ContextType = {
  breakpoint: '', // 공유할 데이터 속성 초기값
}
export const ResponsiveContext = createContext<ContextType>(defaultContextValue)

type ResponsiveProviderProps = {}
export const ResponsiveProvider: FC<
  PropsWithChildren<ResponsiveProviderProps>
> = ({ children, ...props }) => {
  const breakpoint = 'sm'
  const value = {
    breakpoint, // breakpoint: breakpoint 코드를 간결하게 표현
  }
  return <ResponsiveContext.Provider value={value} children={children} />
}
