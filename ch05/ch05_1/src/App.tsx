// 374p 기본 앱 파일 작성하기
// 378p 리덕스로 시계 구현하기(초기 모습)
import type { Action } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import ReduxClock from './pages/ReduxClock'
import UseReducerClock from './pages/UseReducerClock'

type AppState = {
  today: Date
}

const initialAppState = {
  today: new Date(),
}
const rootReducer = (state: AppState = initialAppState, action: Action) => state
const store = configureStore({ reducer: rootReducer, middleware: [] })

export default function App() {
  return (
    <ReduxProvider store={store}>
      <main className="p-8 ">
        <UseReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  )
}
