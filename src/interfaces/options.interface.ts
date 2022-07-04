import { ApexOptions } from "apexcharts"

export interface ChartSeries {
  name: string
  type: string
  data: number[]
}
export interface ChartSettings {
  options: ApexOptions
  series: ChartSeries[]
}
