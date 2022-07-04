import React, { useState, useEffect } from "react"
import Chart from "react-apexcharts"

import { ParsedData } from "../../interfaces/BlockchainResponse.interface"
import SelectSearch, { SelectSearchOption, fuzzySearch, SelectedOptionValue } from "react-select-search"
import { options, dates, series } from "../../utils/chartOptions"
import { ChartSettings } from "../../interfaces/options.interface"
import "./charts.scss"
import "./select-search.scss"

interface Props {
  data: ParsedData[]
}

const Charts: React.FC<Props> = ({ data }) => {
  const [searchOptions, setSearchOptions] = useState<SelectSearchOption[]>([])
  const [searchValue] = useState(data[0].name)
  const [chartAPRSeries, setChartAPRSeries] = useState<ChartSettings>({
    series,
    options,
  })
  const [chartTVLSeries, setChartTVLSeries] = useState<ChartSettings>({
    series,
    options,
  })

  const GetInscrease = (apy: number) => {
    let a = 1.05
    let newApy: number[] = []
    dates.forEach((_, i) => {
      newApy.push(+(newApy.length > 0 ? newApy[i - 1] * a : apy))
    })
    return newApy
  }

  const changeChart = (selectedOption: SelectedOptionValue | SelectedOptionValue[]): void => {
    let select = (Array.isArray(selectedOption) ? selectedOption[0] : selectedOption) as unknown as string
    let selectedData = data.find((item) => item.assetId === select)
    if (!selectedData) {
      console.log("Error gettting data..")
      return
    }
    setCharts(selectedData)
  }

  const setCharts = (item: ParsedData) => {
    setChartAPRSeries({
      options: {
        ...options,
        title: {
          ...options.title,
          text: item.name + " APR (y)",
        },
        yaxis: {
          title: {
            text: "%",
          },
        },
        tooltip: {
          y: {
            formatter: function (value) {
              return value + " %"
            },
          },
        },
      },
      series: [
        {
          name: item.name,
          type: "area",
          data: GetInscrease(item.aprYearly).map((item) => +(item * 100).toFixed(0)),
        },
      ],
    })
    setChartTVLSeries({
      options: {
        ...options,
        title: {
          ...options.title,
          text: item.name + " TVL",
        },
        yaxis: {
          title: {
            text: "Billion",
          },
        },
        tooltip: {
          y: {
            formatter: function (value) {
              return value + " B"
            },
          },
        },
      },
      series: [
        {
          name: item.name,
          type: "area",
          data: GetInscrease(item.tvl).map((item) => +(item / 1000000000).toFixed(2)),
        },
      ],
    })
  }

  useEffect(() => {
    setCharts(data[0])
    setSearchOptions(data.map((item) => ({ name: item.name, value: item.assetId })))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="charts-container">
      <div>
        <div className="search-container">
          <div className="search-title">Choose Asset:</div>
          <SelectSearch
            options={searchOptions}
            value={searchValue}
            onChange={changeChart}
            search
            filterOptions={fuzzySearch}
            placeholder="Search something"
          />
        </div>
        <div className="charts">
          <Chart
            options={chartAPRSeries.options}
            series={chartAPRSeries.series}
            type="line"
            height={380}
            className="apex-charts"
            dir="ltr"
          />
          <Chart
            options={chartTVLSeries.options}
            series={chartTVLSeries.series}
            type="line"
            height={380}
            className="apex-charts"
            dir="ltr"
          />
        </div>
      </div>
    </div>
  )
}

export default Charts
