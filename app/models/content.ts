// 이름과 코드를 담는 모델
export interface NameCodeMappingModel {
  name: String
  code: String
}

// 검색 자동 완성을 위한 모델
export interface SearchStateModel {
  name: string
}

// 랜딩페이지 요청시 받는 데이터 모델
export interface LandingModel {
  nameCodeMapping: NameCodeMappingModel[]
  searchState: SearchStateModel[]
}


// Detail 페이지에 나올 기업의 최근 주가 모델
export interface RecentModel {
  title: String               // 기업명
  code: String                // 기업코드
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

// 오늘 기준 주가들 모음
export interface StocksModel {
  
}

// 날짜당 주가 모델
export interface SingleStockValueModel {
  date: Date
  value: Number
}

// 오늘의 주식 시장 모델
export interface Daily {
  kospi: SingleStockValueModel[]
  nasdaq: SingleStockValueModel[]
  nyse: SingleStockValueModel[]
}

// 상위 TOP을 위한 모델
export interface dailyRank {
  transPriceRank: NameCodeMappingModel
  fluctationRateRank: NameCodeMappingModel
}

export interface SubSide {
  similarStock: NameCodeMappingModel[]
  news: undefined
}