import { ApexOptions } from "apexcharts"
import moment from "moment"
import { ChartSeries } from "../interfaces/options.interface"
export const dates = [
  "01/01/2022",
  "01/02/2022",
  "01/03/2022",
  "01/04/2022",
  "01/05/2022",
  "01/06/2022",
  "01/07/2022",
  "01/08/2022",
  "01/09/2022",
  "01/10/2022",
  "01/11/2022",
]

export const series: ChartSeries[] = [
  {
    name: "",
    type: "",
    data: [],
  },
]
export const options: ApexOptions = {
  chart: {
    type: "area",
    height: 350,
    background: "#41476e",
    foreColor: "#c8cbe6",
    fontFamily: "Calibri",
    toolbar: {
      show: true,
      offsetX: -15,
      offsetY: 25,
      tools: {
        download: false,
        selection: false,
        zoom: false,
        zoomin: true,
        zoomout: true,
        pan: false,
        reset: false,
      },
    },
  },
  stroke: {
    width: 5,
    curve: "smooth",
    lineCap: "butt",
    colors: ["#DA70D6"],
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: ["#DA70D6"],
      opacityFrom: 0.7,
      opacityTo: 0.3,
      stops: [0, 100],
    },
  },
  labels: dates.map((date) => moment(date).format("MMM DD")),
  grid: {
    borderColor: "#5e6385",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  title: {
    align: "center",
    margin: 20,
    offsetY: 15,
    style: {
      fontSize: "20px",
      fontWeight: "bold",
      fontFamily: "Calibri",
      color: "white",
    },
  },
}
