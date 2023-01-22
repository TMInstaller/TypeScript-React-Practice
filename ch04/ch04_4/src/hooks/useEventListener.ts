// 323p 이벤트 처리기 커스텀 훅 만들기
import { useEffect } from 'react'

export const useEventListener = (
  target: EventTarget | null,
  type: string,
  callback: EventListenerObject | null
) => {
  useEffect(() => {
    if (target && callback) {
      target.addEventListener(type, callback)
      return () => target.removeEventListener(type, callback)
    }
  }, [target, type, callback])
}
