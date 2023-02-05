// 420p 루트 리듀서 파일 작성하기
import { combineReducers } from '@reduxjs/toolkit'
import * as L from './loading'
import * as E from './errorMessage'
import * as F from './fetchUser'

export const rootReducer = combineReducers({
  loading: L.reducer,
  errorMessage: E.reducer,
  fetchUser: F.reducer,
})
