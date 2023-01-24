// 366p 반응형 컨텍스트 구현하기(초기 모습)
import { createContext } from 'react'

type ContextType = {
  breakpoint: string // 공유할 데이터 속성
}
const defaultContextValue: ContextType = {
  breakpoint: '', // 공유할 데이터 속성 초기값
}
export const ResponsiveContext = createContext<ContextType>(defaultContextValue)
