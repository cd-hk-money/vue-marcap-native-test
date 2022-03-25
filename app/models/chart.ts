export interface CandleChartModel {
  name: String
  data: CandleChartDataModel[]
}

export interface LineChartModel {
  name: String
  data: LineChartDataModel[]
}

export interface CandleChartDataModel {
  x: Date
  y: String[]
}

export interface LineChartDataModel {
  x: Date
  y: String
}