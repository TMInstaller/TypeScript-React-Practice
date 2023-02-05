// 424p 개발 모드일 때에만 기록하도록 설정하기
import { configureStore } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { rootReducer } from './rootReducer'
// 426p redux-logger 패키지로 수정하기
import logger from 'redux-logger'
// 428p 썽크 미들웨어 적용하기
import thunk from 'redux-thunk'

const useLogger = process.env.NODE_ENV !== 'production'

const initializaStore = () => {
  const middleware: any[] = [thunk]
  if (useLogger) {
    middleware.push(logger)
  }

  const store = configureStore({ reducer: rootReducer, middleware: [] })
  return store
}

export function useStore() {
  const store = useMemo(() => initializaStore(), [])
  return store
}
