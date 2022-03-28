import { SimpleStockModel } from "./stock"
// /daily
// 오늘의 주식 시장 모델
export interface Daily {
  kospi: SingleStockValueModel[]
  nasdaq: SingleStockValueModel[]
  nyse: SingleStockValueModel[]
}
// /dailyRank
// 상위 TOP을 위한 모델
export interface dailyRank {
  transPriceRank: SimpleStockModel[]
  fluctationRateRank: SimpleStockModel[]
}

export interface SingleStockValueModel {
  date: Date
  value: Number
}