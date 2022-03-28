# vue-marcap-native-test

## <Strong>Using nativescript + vue + ts + non-store</Strong>

## 기존의 vuex store 집약 방식에서 service + model 방식으로 변경.

### <strong>`/app/models/langing`</strong> 랜딩 <br>
### <strong>`/app/models/interest`</strong> 관심 종목<br>
### <strong>`/app/models/detail`</strong> 종목 상세정보 <br>

* * *
### <strong>`/app/models/langing`</strong> 랜딩 <br>
```ts
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

// 주식 시장 데이터 모델
export interface SingleStockValueModel {
  date: Date
  value: Number
}
```

### <strong>`/app/models/interest`</strong> 관심 종목<br>
```ts
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
```

### <strong>`/app/models/detail`</strong> 종목 상세정보 <br>
```ts
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