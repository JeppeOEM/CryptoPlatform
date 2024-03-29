class StrategyData {
  constructor() {
    this._exchange = "binance";
    this._name = "test";
    this._description = "description";
    this._init_candles = 100;
    this._pair = "";
    this._data = {
      indicators: [],
      dataset_pairs: [],
      //cols = column name of the df
      cols: [],
      name: "",
      description: "",
      pair: "",
      exchange: "",
      init_candles: 100,
    };
    this.stratName();
  }
  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }

  stratName() {
    let name = document.querySelector("#strategy_id");
    this._data.name = name.dataset.name;
  }
}

const strategyDataInstance = new StrategyData();

export { strategyDataInstance };

// const data = {
//   exchange: "binance",
//   init_candles: 100,
//   symbol: "BTCUSDT",
//   name: "test",
//   description: "description",
// };
