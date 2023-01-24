// 380p 스토어 관리 코드 작성하기
import { configureStore } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { rootReducer } from './rootReducer'

const initializeStore = () => {
  const store = configureStore({ reducer: rootReducer, middleware: [] })
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
