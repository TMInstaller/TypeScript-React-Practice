// 324p 창 크기를 설정하는 커스텀 훅 만들기
import { useState, useEffect } from 'react'
import { useEventListener } from './useEventListener'

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0])

  useEffect(() => {
    setWidthHeight((notUsed) => [window.innerWidth, window.innerHeight])
  }, []) // 컴포넌트가 마운팅 될 때 창 크기 설정

  useEventListener(window, 'resize', () => {
    setWidthHeight((notUsed) => [window.innerWidth, window.innerHeight])
  }) // 창 크기가 변경될 때마다 설정

  return widthHeight
}