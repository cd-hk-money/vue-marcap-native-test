
// *** 데이터 타입은 볼 필요 없음. 다 JSON으로 보내면됨 ***

// /stock/{stockCode}
// 종목의 상세 정보를 가져온다.
export interface NonChartDetailModel {
  title: String               // 기업명
  renewalDate: Date           // 최근 갱신일   
  closePrice: String          // 최근 종가
  closePriceAmount: String    // 최근 종가 변화량
  closePriceRatio: String     // 최근 종가 변화율
  closeVolume: String         // 최근 거래량
  closeVolumeAmount: String   // 최근 거래량 변화량
  closeVolumeRatio: String    // 최근 거래량 변화율    
  stockAmount: String         // 발행주식수
  marcap: String              // 시가총액
  higiestYears: String        // 52주 최고
  lowestYears: String         // 52주 최저
}


// /stock/{stockCode}/{requestDate}
// 종목의 차트 정보와 보조지표를 가져온다.
export interface chartDetailModel {
  title: String                         // 기업명
  stockPrice: CandleChartDataModel[]    // 주가
  sales: LineChartDataModel[]           // 매출액
  profits: LineChartDataModel[]         // 영업이익

  eps: LineChartDataModel[] | undefined 
  per: LineChartDataModel[] | undefined
  pbr: LineChartDataModel[] | undefined
  dr: LineChartDataModel[] | undefined
  ebit: LineChartDataModel[] | undefined  
  roe: LineChartDataModel[] | undefined
  psr: LineChartDataModel[] | undefined
}                                    

// Candle Chart 표현을 위한 데이터 모델. 
export interface CandleChartDataModel {
  x: Date // 1일단위
  y: PriceModel
}

export interface PriceModel {
  open: Number
  high: Number
  low: Number
  close: Number
  volume: Number
}

// Line Chart 표현을 위한 데이터 모델.
export interface LineChartDataModel {
  x: Date // 분기
  y: FinancialStatementModel
}

interface FinancialStatementModel {
  value: Number
}


