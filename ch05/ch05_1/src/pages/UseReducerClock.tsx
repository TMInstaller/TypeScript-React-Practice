// 382p 리덕스 시계 구현하기
// 387p 시계 완성하기
// 389p useReducer 훅으로 시계 완성하기
import { useReducer } from 'react'
import type { AppState } from '../store'
import { Div, Title, Subtitle } from '../components'
import { useInterval } from '../hooks'
import { SetTodayAction } from '../store/actions'

export default function ReduxClock() {
  const [{ today }, dispatch] = useReducer(
    (state: AppState, action: SetTodayAction) => {
      switch (action.type) {
        case 'setToday':
          return { ...state, today: new Date() }
      }
    },
    {
      today: new Date(),
    }
  )

  useInterval(() => {
    dispatch({ type: 'setToday', today: new Date() })
  })

  return (
    <Div className="flex flex-col items-center justify-center h-24 ">
      <Title className="text-5xl ">UseReduxClock</Title>
      <Title className="mt-4 text-3xl ">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl ">
        {today.toLocaleDateString()}
      </Subtitle>
    </Div>
  )
}
