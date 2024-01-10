import { createChart } from "lightweight-charts";
const chart_div = document.querySelector(".chart");

const chart = createChart(chart_div, {
  width: 600,
  height: 300,
  layout: {
    background: {
      type: "solid",
      color: "#000000",
    },
    textColor: "rgba(255, 255, 255, 0.9)",
  },
  grid: {
    vertLines: {
      color: "rgba(197, 203, 206, 0.5)",
    },
    horzLines: {
      color: "rgba(197, 203, 206, 0.5)",
    },
  },
  crosshair: {
    mode: CrosshairMode.Normal,
  },
  rightPriceScale: {
    borderColor: "rgba(197, 203, 206, 0.8)",
  },
  timeScale: {
    timeVisible: true,
    // secondsVisible: false,
    borderColor: "rgba(197, 203, 206, 0.8)",
  },
});

var candleSeries = chart.addCandlestickSeries({
  upColor: "rgba(255, 144, 0, 1)",
  downColor: "#000",
  borderDownColor: "rgba(255, 144, 0, 1)",
  borderUpColor: "rgba(155, 144, 0, 1)",
  wickDownColor: "rgba(55, 144, 0, 1)",
  wickUpColor: "rgba(255, 144, 0, 1)",
});

candleSeries.setData([
  { time: Date.parse("2019-04-11 09:43"), open: 107.2, high: 207.3, low: 207.1, close: 207.1 },
  { time: Date.parse("2019-04-11 12:43"), open: 407.2, high: 207.3, low: 207.1, close: 207.1 },
  { time: Date.parse("2019-04-11 13:43"), open: 307.2, high: 407.3, low: 207.1, close: 207.1 },
  { time: Date.parse("2019-04-11 14:43"), open: 107.2, high: 207.3, low: 207.1, close: 207.1 },
]);

// candleSeries.setData(chart_data);
// const chart_data = [
//   {
//     time: 1696812000,
//     open: 210.9,
//     high: 211,
//     low: 210.8,
//     close: 210.9,
//     volume: 75.299,
//     "5m": true,
//   },
//   {
//     time: 1696812300,
//     open: 210.8,
//     high: 210.9,
//     low: 210.8,
//     close: 210.9,
//     volume: 14.228,
//     "5m": true,
//   },
//   {
//     time: 1696812600,
//     open: 211.1,
//     high: 211.1,
//     low: 210.9,
//     close: 211,
//     volume: 321.996,
//     "5m": true,
//   },
//   {
//     time: 1696812900,
//     open: 211,
//     high: 211.1,
//     low: 210.9,
//     close: 211,
//     volume: 340.615,
//     "5m": true,
//   },
//   {
//     time: 1696813200,
//     open: 210.9,
//     high: 211,
//     low: 210.8,
//     close: 210.8,
//     volume: 132.859,
//     "5m": true,
//   },
//   {
//     time: 1696813500,
//     open: 210.8,
//     high: 210.8,
//     low: 210.7,
//     close: 210.8,
//     volume: 367.959,
//     "5m": true,
//   },
//   {
//     time: 1696813800,
//     open: 210.8,
//     high: 210.8,
//     low: 210.7,
//     close: 210.8,
//     volume: 334.238,
//     "5m": true,
//   },
//   {
//     time: 1696814100,
//     open: 210.9,
//     high: 210.9,
//     low: 210.8,
//     close: 210.9,
//     volume: 212.936,
//     "5m": true,
//   },
//   {
//     time: 1696814400,
//     open: 210.9,
//     high: 211,
//     low: 210.9,
//     close: 210.9,
//     volume: 12.251,
//     "5m": true,
//   },
//   {
//     time: 1696814700,
//     open: 211,
//     high: 211,
//     low: 210.9,
//     close: 211,
//     volume: 14.915,
//     "5m": true,
//   },
//   {
//     time: 1696815000,
//     open: 211,
//     high: 211.1,
//     low: 210.9,
//     close: 211.1,
//     volume: 716.024,
//     "5m": true,
//   },
//   {
//     time: 1696815300,
//     open: 211.2,
//     high: 211.2,
//     low: 211.1,
//     close: 211.1,
//     volume: 17.857,
//     "5m": true,
//   },
//   {
//     time: 1696815600,
//     open: 211.2,
//     high: 211.3,
//     low: 211.1,
//     close: 211.2,
//     volume: 297.761,
//     "5m": true,
//   },
//   {
//     time: 1696815900,
//     open: 211.3,
//     high: 211.4,
//     low: 211.2,
//     close: 211.4,
//     volume: 186.384,
//     "5m": true,
//   },
//   {
//     time: 1696816200,
//     open: 211.8,
//     high: 211.8,
//     low: 211.6,
//     close: 211.6,
//     volume: 182.12,
//     "5m": true,
//   },
//   {
//     time: 1696816500,
//     open: 211.7,
//     high: 211.8,
//     low: 211.7,
//     close: 211.8,
//     volume: 542.906,
//     "5m": true,
//   },
//   {
//     time: 1696816800,
//     open: 211.5,
//     high: 211.7,
//     low: 211.5,
//     close: 211.7,
//     volume: 338.626,
//     "5m": true,
//   },
//   {
//     time: 1696817100,
//     open: 211.3,
//     high: 211.4,
//     low: 211.3,
//     close: 211.4,
//     volume: 4.357,
//     "5m": true,
//   },
//   {
//     time: 1696817400,
//     open: 211.5,
//     high: 211.5,
//     low: 211.4,
//     close: 211.5,
//     volume: 14.133,
//     "5m": true,
//   },
//   {
//     time: 1696817700,
//     open: 211.7,
//     high: 211.8,
//     low: 211.7,
//     close: 211.8,
//     volume: 126.55,
//     "5m": true,
//   },
//   {
//     time: 1696818000,
//     open: 211.4,
//     high: 211.6,
//     low: 211.4,
//     close: 211.6,
//     volume: 479.951,
//     "5m": true,
//   },
//   {
//     time: 1696818300,
//     open: 211.7,
//     high: 211.8,
//     low: 211.6,
//     close: 211.8,
//     volume: 591.718,
//     "5m": true,
//   },
//   {
//     time: 1696818600,
//     open: 211.9,
//     high: 211.9,
//     low: 211.8,
//     close: 211.9,
//     volume: 55.911,
//     "5m": true,
//   },
//   {
//     time: 1696818900,
//     open: 211.8,
//     high: 211.8,
//     low: 211.7,
//     close: 211.8,
//     volume: 13.907,
//     "5m": true,
//   },
//   {
//     time: 1696819200,
//     open: 211.7,
//     high: 211.8,
//     low: 211.7,
//     close: 211.7,
//     volume: 39.378,
//     "5m": true,
//   },
//   {
//     time: 1696819500,
//     open: 211.9,
//     high: 211.9,
//     low: 211.8,
//     close: 211.9,
//     volume: 25.312,
//     "5m": true,
//   },
//   {
//     time: 1696819800,
//     open: 211.7,
//     high: 211.8,
//     low: 211.7,
//     close: 211.7,
//     volume: 4.964,
//     "5m": true,
//   },
//   {
//     time: 1696820100,
//     open: 211.8,
//     high: 211.9,
//     low: 211.8,
//     close: 211.8,
//     volume: 34.833,
//     "5m": true,
//   },
//   {
//     time: 1696820400,
//     open: 211.9,
//     high: 212,
//     low: 211.8,
//     close: 212,
//     volume: 161.354,
//     "5m": true,
//   },
//   {
//     time: 1696820700,
//     open: 212,
//     high: 212,
//     low: 211.9,
//     close: 211.9,
//     volume: 32.85,
//     "5m": true,
//   },
//   {
//     time: 1696821000,
//     open: 212.2,
//     high: 212.2,
//     low: 212.1,
//     close: 212.2,
//     volume: 34.378,
//     "5m": true,
//   },
//   {
//     time: 1696821300,
//     open: 211.9,
//     high: 212,
//     low: 211.9,
//     close: 211.9,
//     volume: 10.816,
//     "5m": true,
//   },
//   {
//     time: 1696821600,
//     open: 211.7,
//     high: 211.7,
//     low: 211.6,
//     close: 211.6,
//     volume: 22.395,
//     "5m": true,
//   },
//   {
//     time: 1696821900,
//     open: 211.7,
//     high: 211.8,
//     low: 211.7,
//     close: 211.7,
//     volume: 23.312,
//     "5m": true,
//   },
//   {
//     time: 1696822200,
//     open: 211.8,
//     high: 211.8,
//     low: 211.7,
//     close: 211.8,
//     volume: 9.801,
//     "5m": true,
//   },
//   {
//     time: 1696822500,
//     open: 211.9,
//     high: 211.9,
//     low: 211.8,
//     close: 211.8,
//     volume: 11.971,
//     "5m": true,
//   },
//   {
//     time: 1696822800,
//     open: 211.9,
//     high: 212,
//     low: 211.9,
//     close: 212,
//     volume: 7.791,
//     "5m": true,
//   },
//   {
//     time: 1696823100,
//     open: 211.9,
//     high: 212,
//     low: 211.9,
//     close: 211.9,
//     volume: 17.554,
//     "5m": true,
//   },
//   {
//     time: 1696823400,
//     open: 212.1,
//     high: 212.1,
//     low: 212,
//     close: 212.1,
//     volume: 15.428,
//     "5m": true,
//   },
//   {
//     time: 1696823700,
//     open: 212,
//     high: 212,
//     low: 211.9,
//     close: 211.9,
//     volume: 306.18,
//     "5m": true,
//   },
//   {
//     time: 1696824000,
//     open: 211.9,
//     high: 212.1,
//     low: 211.9,
//     close: 212,
//     volume: 161.102,
//     "5m": true,
//   },
//   {
//     time: 1696824300,
//     open: 212,
//     high: 212,
//     low: 211.9,
//     close: 211.9,
//     volume: 8.199,
//     "5m": true,
//   },
//   {
//     time: 1696824600,
//     open: 212,
//     high: 212,
//     low: 211.9,
//     close: 211.9,
//     volume: 66.876,
//     "5m": true,
//   },
//   {
//     time: 1696824900,
//     open: 212.1,
//     high: 212.1,
//     low: 212,
//     close: 212,
//     volume: 13.829,
//     "5m": true,
//   },
//   {
//     time: 1696825200,
//     open: 211.9,
//     high: 212,
//     low: 211.9,
//     close: 211.9,
//     volume: 3.106,
//     "5m": true,
//   },
//   {
//     time: 1696825500,
//     open: 212.1,
//     high: 212.1,
//     low: 212,
//     close: 212.1,
//     volume: 20.817,
//     "5m": true,
//   },
//   {
//     time: 1696825800,
//     open: 211.9,
//     high: 212,
//     low: 211.9,
//     close: 211.9,
//     volume: 7.167,
//     "5m": true,
//   },
//   {
//     time: 1696826100,
//     open: 211.9,
//     high: 212,
//     low: 211.8,
//     close: 212,
//     volume: 208.11,
//     "5m": true,
//   },
//   {
//     time: 1696826400,
//     open: 212,
//     high: 212,
//     low: 211.9,
//     close: 212,
//     volume: 13.624,
//     "5m": true,
//   },
//   {
//     time: 1696826700,
//     open: 211.9,
//     high: 212.1,
//     low: 211.9,
//     close: 212,
//     volume: 60.771,
//     "5m": true,
//   },
//   {
//     time: 1696827000,
//     open: 212,
//     high: 212,
//     low: 211.9,
//     close: 212,
//     volume: 6.243,
//     "5m": true,
//   },
//   {
//     time: 1696827300,
//     open: 212,
//     high: 212,
//     low: 211.8,
//     close: 211.8,
//     volume: 337.901,
//     "5m": true,
//   },
//   {
//     time: 1696827600,
//     open: 211.9,
//     high: 211.9,
//     low: 211.8,
//     close: 211.9,
//     volume: 12.805,
//     "5m": true,
//   },
//   {
//     time: 1696827900,
//     open: 211.9,
//     high: 211.9,
//     low: 211.8,
//     close: 211.9,
//     volume: 12.737,
//     "5m": true,
//   },
//   {
//     time: 1696828200,
//     open: 211.9,
//     high: 212,
//     low: 211.8,
//     close: 211.9,
//     volume: 732.218,
//     "5m": true,
//   },
//   {
//     time: 1696828500,
//     open: 212,
//     high: 212,
//     low: 211.9,
//     close: 212,
//     volume: 15.335,
//     "5m": true,
//   },
//   {
//     time: 1696828800,
//     open: 212,
//     high: 212,
//     low: 211.9,
//     close: 212,
//     volume: 562.699,
//     "5m": true,
//   },
//   {
//     time: 1696829100,
//     open: 211.7,
//     high: 211.8,
//     low: 211.7,
//     close: 211.8,
//     volume: 11.853,
//     "5m": true,
//   },
//   {
//     time: 1696829400,
//     open: 211.8,
//     high: 211.8,
//     low: 211.7,
//     close: 211.7,
//     volume: 46.278,
//     "5m": true,
//   },
//   {
//     time: 1696829700,
//     open: 211.7,
//     high: 211.7,
//     low: 211.6,
//     close: 211.7,
//     volume: 59.01,
//     "5m": true,
//   },
//   {
//     time: 1696830000,
//     open: 211.5,
//     high: 211.6,
//     low: 211.5,
//     close: 211.6,
//     volume: 12.935,
//     "5m": true,
//   },
//   {
//     time: 1696830300,
//     open: 211.6,
//     high: 211.7,
//     low: 211.5,
//     close: 211.6,
//     volume: 707.917,
//     "5m": true,
//   },
//   {
//     time: 1696830600,
//     open: 211.6,
//     high: 211.7,
//     low: 211.6,
//     close: 211.7,
//     volume: 57.535,
//     "5m": true,
//   },
//   {
//     time: 1696830900,
//     open: 211.5,
//     high: 211.6,
//     low: 211.5,
//     close: 211.6,
//     volume: 30.158,
//     "5m": true,
//   },
//   {
//     time: 1696831200,
//     open: 211.6,
//     high: 211.6,
//     low: 211.5,
//     close: 211.6,
//     volume: 17.334,
//     "5m": true,
//   },
//   {
//     time: 1696831500,
//     open: 211.4,
//     high: 211.5,
//     low: 211.4,
//     close: 211.5,
//     volume: 68.912,
//     "5m": true,
//   },
//   {
//     time: 1696831800,
//     open: 211.5,
//     high: 211.6,
//     low: 211.4,
//     close: 211.5,
//     volume: 90.837,
//     "5m": true,
//   },
//   {
//     time: 1696832100,
//     open: 211.7,
//     high: 211.7,
//     low: 211.6,
//     close: 211.7,
//     volume: 65.93,
//     "5m": true,
//   },
//   {
//     time: 1696832400,
//     open: 211.5,
//     high: 211.6,
//     low: 211.5,
//     close: 211.6,
//     volume: 15.868,
//     "5m": true,
//   },
//   {
//     time: 1696832700,
//     open: 211.8,
//     high: 211.8,
//     low: 211.7,
//     close: 211.7,
//     volume: 193.183,
//     "5m": true,
//   },
//   {
//     time: 1696833000,
//     open: 211.8,
//     high: 211.8,
//     low: 211.7,
//     close: 211.8,
//     volume: 29.391,
//     "5m": true,
//   },
//   {
//     time: 1696833300,
//     open: 211.8,
//     high: 211.8,
//     low: 211.7,
//     close: 211.8,
//     volume: 42.514,
//     "5m": true,
//   },
//   {
//     time: 1696833600,
//     open: 211.8,
//     high: 211.8,
//     low: 211.6,
//     close: 211.6,
//     volume: 292.689,
//     "5m": true,
//   },
//   {
//     time: 1696833900,
//     open: 211.8,
//     high: 211.8,
//     low: 211.6,
//     close: 211.7,
//     volume: 668.939,
//     "5m": true,
//   },
//   {
//     time: 1696834200,
//     open: 211.8,
//     high: 211.8,
//     low: 211.7,
//     close: 211.8,
//     volume: 44.253,
//     "5m": true,
//   },
//   {
//     time: 1696834500,
//     open: 211.7,
//     high: 211.7,
//     low: 211.6,
//     close: 211.7,
//     volume: 14.72,
//     "5m": true,
//   },
//   {
//     time: 1696834800,
//     open: 211.7,
//     high: 211.7,
//     low: 211.5,
//     close: 211.5,
//     volume: 103.173,
//     "5m": true,
//   },
//   {
//     time: 1696835100,
//     open: 211.5,
//     high: 211.6,
//     low: 211.5,
//     close: 211.5,
//     volume: 42.808,
//     "5m": true,
//   },
//   {
//     time: 1696835400,
//     open: 211.6,
//     high: 211.6,
//     low: 211.5,
//     close: 211.6,
//     volume: 18.428,
//     "5m": true,
//   },
//   {
//     time: 1696835700,
//     open: 211.4,
//     high: 211.4,
//     low: 211.3,
//     close: 211.3,
//     volume: 18.913,
//     "5m": true,
//   },
//   {
//     time: 1696836000,
//     open: 211.2,
//     high: 211.3,
//     low: 211,
//     close: 211,
//     volume: 376.244,
//     "5m": true,
//   },
//   {
//     time: 1696836300,
//     open: 211,
//     high: 211.1,
//     low: 210.9,
//     close: 211,
//     volume: 188.926,
//     "5m": true,
//   },
//   {
//     time: 1696836600,
//     open: 211,
//     high: 211.1,
//     low: 210.9,
//     close: 211,
//     volume: 271.912,
//     "5m": true,
//   },
//   {
//     time: 1696836900,
//     open: 210.9,
//     high: 210.9,
//     low: 210.7,
//     close: 210.8,
//     volume: 886.362,
//     "5m": true,
//   },
//   {
//     time: 1696837200,
//     open: 211,
//     high: 211,
//     low: 210.9,
//     close: 210.9,
//     volume: 29.438,
//     "5m": true,
//   },
//   {
//     time: 1696837500,
//     open: 210.9,
//     high: 211,
//     low: 210.9,
//     close: 211,
//     volume: 43.064,
//     "5m": true,
//   },
//   {
//     time: 1696837800,
//     open: 211,
//     high: 211,
//     low: 210.9,
//     close: 211,
//     volume: 170.365,
//     "5m": true,
//   },
//   {
//     time: 1696838100,
//     open: 210.9,
//     high: 211,
//     low: 210.9,
//     close: 210.9,
//     volume: 7.556,
//     "5m": true,
//   },
//   {
//     time: 1696838400,
//     open: 211,
//     high: 211.1,
//     low: 210.9,
//     close: 211.1,
//     volume: 1195.352,
//     "5m": true,
//   },
//   {
//     time: 1696838700,
//     open: 211.2,
//     high: 211.2,
//     low: 211.1,
//     close: 211.2,
//     volume: 30.454,
//     "5m": true,
//   },
//   {
//     time: 1696839000,
//     open: 211.2,
//     high: 211.3,
//     low: 211.1,
//     close: 211.2,
//     volume: 134.942,
//     "5m": true,
//   },
//   {
//     time: 1696839300,
//     open: 211.2,
//     high: 211.3,
//     low: 211.2,
//     close: 211.2,
//     volume: 32.538,
//     "5m": true,
//   },
//   {
//     time: 1696839600,
//     open: 211.1,
//     high: 211.2,
//     low: 211,
//     close: 211.1,
//     volume: 478.413,
//     "5m": true,
//   },
//   {
//     time: 1696839900,
//     open: 211.2,
//     high: 211.2,
//     low: 211.1,
//     close: 211.1,
//     volume: 12.702,
//     "5m": true,
//   },
//   {
//     time: 1696840200,
//     open: 211.1,
//     high: 211.1,
//     low: 211,
//     close: 211.1,
//     volume: 37.491,
//     "5m": true,
//   },
//   {
//     time: 1696840500,
//     open: 210.6,
//     high: 210.8,
//     low: 210.4,
//     close: 210.7,
//     volume: 1433.594,
//     "5m": true,
//   },
//   {
//     time: 1696840800,
//     open: 210.9,
//     high: 211,
//     low: 210.8,
//     close: 210.8,
//     volume: 190.989,
//     "5m": true,
//   },
//   {
//     time: 1696841100,
//     open: 210.8,
//     high: 210.9,
//     low: 210.6,
//     close: 210.9,
//     volume: 425.632,
//     "5m": true,
//   },
//   {
//     time: 1696841400,
//     open: 210.6,
//     high: 210.7,
//     low: 210.5,
//     close: 210.7,
//     volume: 191.187,
//     "5m": true,
//   },
//   {
//     time: 1696841700,
//     open: 210.5,
//     high: 210.8,
//     low: 210.4,
//     close: 210.8,
//     volume: 630.791,
//     "5m": true,
//   },
// ];
