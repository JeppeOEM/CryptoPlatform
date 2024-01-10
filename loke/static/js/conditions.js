import { selected_cond_instance } from "./globals.js";
import { postJsonGetData } from "./fetch.js";
import { getJson } from "./fetch.js";
import { show_string } from "./functions/show_string.js";
import { condController } from "./cond_list.js";

import { last_cond_dom } from "./globals.js";

const selected_cond = selected_cond_instance;

// const condController = condController
window.save_cond_sell = save_cond_sell;
window.save_cond_buy = save_cond_buy;
window.del_last_buy_cond = del_last_buy_cond;
window.del_last_sell_cond = del_last_sell_cond;
window.del_last = del_last;

let conditions = [];
let conditions_sell = [];
let cond = [];
const data = {
  exchange: "binance",
  init_candles: 100,
  symbol: "BTCUSDT",
  name: "test",
  description: "description",
};

export async function build_conds() {
  const json = await getJson("load_conditions");
  const buy_conds = json.buy_conds;
  const sell_conds = json.sell_conds;
  console.log(buy_conds, "buy_conds!");
  console.log(load_cond_managers_buy(buy_conds));
  // console.log(load_cond_managers_sell(sell_conds));

  function load_cond_managers_buy(arr) {
    const lol = arr.forEach((cond) => {
      let condManager = condController.getKey(cond.fk_buy_list_id);
      console.log(which_row(cond.list_row));
      condManager.insert_cond(cond.buy_eval, which_row(cond.list_row), cond.buy_conditions_id);
    });
    console.log(lol);
  }

  function load_cond_managers_sell(arr) {
    const lol = arr.forEach((cond) => {
      let condManager = condController.getKey(cond.fk_sell_list_id);
      condManager.insert_cond(cond.buy_eval, which_row(cond.list_row), cond.sell_conditions_id);
    });
    console.log(lol);
  }
}

function which_row(number) {
  switch (number) {
    case 1:
      return "toDo";
    case 2:
      return "ongoing";
    case 3:
      return "done";
  }
}

function which_row_string(string) {
  switch (string) {
    case "toDo":
      return 1;
    case "onGoing":
      return 2;
    case "done":
      return 3;
  }
}

export async function save_cond_buy() {
  //indicators
  conditions.push(selected_cond.get_cond());
  // reset global cond
  selected_cond.set_string();
  selected_cond.reset_cond();
  // cond = [];
  document.querySelectorAll("cond").forEach((condbuy) => {
    condbuy.textContent = `${show_string(cond)}`;
  });
  document.querySelectorAll("saved_conds").forEach((saved_cond) => {
    saved_cond.textContent = `${show_string(conditions)}`;
  });
  data.buy_cond = JSON.stringify(conditions);
  console.log(data.buy_cond);
  data.side = "buy";
  data.primary_key = selected_cond.get();
  console.log(data.buy_cond);
  let response = await postJsonGetData(data, "condition");
  console.log(response.id);
  console.log(last_cond_dom, "last_cond_dom");
  //assign id to last cond inserted in the dom
  let last_dom = last_cond_dom.get();
  last_dom.dataset.cond_key = response.id;
  last_cond_dom.set(last_dom);
  //   let build_conds = await build_conditions();
  //   document.querySelectorAll("buy_cond2").forEach((bconds) => {
  //     bconds.textContent = `${build_conds}`;
  //   });
  //   console.log(build_conds, "build_conds");
  conditions = [];
}

export async function save_cond_sell() {
  conditions.push(selected_cond.get_cond());
  // reset global cond
  selected_cond.set_string();
  selected_cond.reset_cond();
  document.querySelectorAll("cond").forEach((cond) => {
    cond.textContent = `${show_string(cond_sell)}`;
  });

  document.querySelectorAll("saved_conds_sell").forEach((saved_cond) => {
    saved_cond.textContent = `${show_string(conditions_sell)}`;
  });
  data.sell_cond = JSON.stringify(conditions_sell);
  data.side = "sell";
  data.primary_key = selected_cond.get();

  let response = await postJsonGetData(data, "condition");
  console.log(response.id);
  //   let build_conds = await build_conditions();
  //   document.querySelectorAll("sell_cond2").forEach((sellcond2) => {
  //     sellcond2.textContent = `${build_conds}`;
  //   });
  conditions_sell = [];
  console.log(build_conds, "build_conds");
  selected_cond.reset_cond();
}

function del_last() {
  selected_cond.del_last();
  document.querySelectorAll(".cond").forEach((unsaved_cond) => {
    unsaved_cond.textContent = `${show_string(cond)}`;
  });
  selected_cond.set_string(show_string(cond));
}

function del_last_sell_cond() {
  conditions_sell.pop();
  document.querySelectorAll("conditions_sell").forEach((cond_sell) => {
    cond_sell.textContent = `${show_string(cond_sell)}`;
  });
  selected_cond.set_string(show_string(cond));
}

function del_last_buy_cond() {
  conditions.pop();
  document.querySelectorAll("conditions").forEach((cond) => {
    cond.textContent = `${show_string(cond)}`;
  });
  selected_cond.set_string(show_string(cond));
}

