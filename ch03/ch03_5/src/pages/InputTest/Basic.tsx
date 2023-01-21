// 242p Input 컴포넌트 사용하기
import { Input } from '../../theme/daisyui'

export default function Basic() {
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center ">Basic</h2>
      <div className="mt-4 justify-evenly">
        <input className="input input-primary" />
        <Input className="input-primary" />
      </div>
    </section>
  )
}
