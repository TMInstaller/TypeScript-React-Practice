// 167p Title 컴포넌트를 사용하는 기본 파일 만들기
// 220p User 컴포넌트 구현(중간)
import type { FC } from 'react'
import * as D from '../data'

export type UserProps = {
  user: D.IUser
}

const User: FC<UserProps> = ({ user, ...props }) => {
  return <div {...props} />
}

export default User
