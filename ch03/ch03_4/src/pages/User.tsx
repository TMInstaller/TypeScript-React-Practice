// 167p Title 컴포넌트를 사용하는 기본 파일 만들기
// 220p User 컴포넌트 구현(중간)
import type { FC } from 'react'
import type { DivProps } from '../components'
import { Div, Avatar } from '../components'
import * as D from '../data'

export type UserProps = DivProps & {
  user: D.IUser
}

const User: FC<UserProps> = ({ user, ...props }) => {
  const { name, email, jobTitle, avatar } = user
  return (
    <Div {...props}>
      <div className="flex p-2">
        <Avatar src={avatar} size="2rem" />
        <div className="ml-2 ">
          <p className="font-bold">{name}</p>
          <p className="to-gray-500 line-clamp-1">{jobTitle}</p>
          <p className="underline to-blue-500">{email}</p>
        </div>
      </div>
    </Div>
  )
}

export default User
