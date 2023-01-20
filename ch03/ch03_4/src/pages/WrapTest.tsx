// 209p flex-wrap Test
import { Div, Title, Subtitle } from '../components'
import * as D from '../data'

export default function CopyMe() {
  const boxes = D.range(1, 30 + 1).map((number) => {
    return (
      <p key={number} className={`border-2 border-blue-300 p-1 mt-1 ml-1`}>
        {number}
      </p>
    )
  })
  return (
    <div className="mt-4 ">
      <Title>WrapTest</Title>
      <Div className="flex flex-col w-1/2 mt-4 bg-gray-200">
        <Div className="mt-2 ">
          <Subtitle>flex-row flex-wrap</Subtitle>
          <Div className="flex flex-wrap p-4 flow-row">{boxes}</Div>
        </Div>
        <Div className="mt-2 ">
          <Subtitle>flex-row flex-wrap-reverse</Subtitle>
          <Div className="flex flex-wrap-reverse p-4 flow-row">{boxes}</Div>
        </Div>
        <Div className="mt-2 ">
          <Subtitle>flex-row flex-wrap-nowrap</Subtitle>
          <Div className="flex p-4 overflow-hidden flow-row flex-nowrap">
            {boxes}
          </Div>
        </Div>
      </Div>
      <Div className="mr-8 ">
        <Subtitle>flex-column flex-wrap</Subtitle>
        <Div className="flex flex-col flex-wrap h-40 p-4 min-h-40">{boxes}</Div>
      </Div>
      <Div className="mr-8 ">
        <Subtitle>flex-column flex-wrap-reverse</Subtitle>
        <Div className="flex flex-col flex-wrap-reverse h-40 p-4 min-h-40">
          {boxes}
        </Div>
      </Div>
      <Div className="mr-8 ">
        <Subtitle>flex-column flex-nowrap</Subtitle>
        <Div className="flex flex-col h-40 p-4 overflow-hidden flex-nowrap min-h-40">
          {boxes}
        </Div>
      </Div>
    </div>
  )
}
