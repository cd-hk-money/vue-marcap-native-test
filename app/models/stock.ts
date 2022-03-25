export interface IndicatorModel {
  bps: Number
  date: Date
  dr: Number
  eps: Number
  ev_ebitda: Number
  pbr: Number
  pcr: Number
  pegr: Number
  per: Number
  roe: Number
  stockCode: String  
}

export interface FinanceStatementModel {
  currentAssets: Number
  date: Date
  ebit: Number
  equity: Number
  grossMargin: Number
  id: Number
  liability: Number
  profit: Number
  revenue: Number
  score: Score
  stockCode: String
  stocks: Number
}

export interface Score {
  score: Number
}

// stockModel
export interface StockModel {
  name: String
  code: String
  sector: String
}

export interface PriceModel {
  changes: Number
  colse: Number
  date: Date
  expectation: Number
  high: Number
  open: Number
  stockCode: String
  volume: Number
}