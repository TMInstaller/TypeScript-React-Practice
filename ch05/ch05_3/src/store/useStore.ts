// 424p 개발 모드일 때에만 기록하도록 설정하기
import { configureStore } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { rootReducer } from './rootReducer'
import logger from './logger'

const useLogger = process.env.NODE_ENV !== 'production'

const initializaStore = () => {
  const middleware: any[] = []
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
