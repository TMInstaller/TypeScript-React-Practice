// 379p 루트 리듀서 코드 옮기기
// 384p 리듀서에 액션 추가하기
// 385p 리듀서에 SetTodayAction 반영하기
import type { Actions } from './actions'
import type { AppState } from './AppState'

const initialAppState = {
  today: new Date(),
}
export const rootReducer = (
  state: AppState = initialAppState,
  action: Actions
) => {
  switch (action.type) {
    case 'setToday': {
      return { ...state, today: action.today }
    }
  }
  return state // 필수
}
