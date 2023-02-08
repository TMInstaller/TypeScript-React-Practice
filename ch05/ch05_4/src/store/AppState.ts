// 445p 앱 상태 파일 작성하기
import * as L from './listEntities'
import * as LO from './listOrders'
import * as LC from './listidCardidOrders'
import * as C from './cardEntities'

export type AppState = {
  listEntities: L.State
  listOrders: LO.State
  listidCardidOrders: LC.State
  cardEntities: C.State
}
