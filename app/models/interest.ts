import { SimpleStockModel } from "./stock"

// /interestList/{memberId}
// 관심종목 리스트 정보를 가져온다.
export interface InterestListsModel {
  userName: String
  interestList: InterestListModel[]
}

export interface InterestListModel {
  listName: String
  listItem: InterestModel[]
}

export interface InterestModel {
  notification: Boolean
  stock: SimpleStockModel
}

// export interface SimpleStockModel {
//   title: String   // 종목 이름
//   code: String    // 종목 코드
//   stock: Number   // 종가
// }