// 383p 오늘 날짜 액션 만들기
// 383p 액션에 type 속성 추가
// 384p 액션에 type 속성의 타입 추가
import type { Action } from 'redux'

export type SetTodayAction = Action<'setToday'> & {
  today: Date
}
export type Actions = SetTodayAction
