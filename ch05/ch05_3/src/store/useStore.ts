// 391p 스토어 파일 작성하기
import { configureStore } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { rootReducer } from './rootReducer'

const initializaStore = () => {
  const store = configureStore({ reducer: rootReducer, middleware: [] })
  return store
}

export function useStore() {
  const store = useMemo(() => initializaStore(), [])
  return store
}
