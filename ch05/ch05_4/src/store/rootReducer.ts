// 390p 루트 리듀서 파일 작성하기
import type { Action } from 'redux'
import type { AppState } from './AppState'
export const rootReducer = (state: AppState, action: Action) => state
