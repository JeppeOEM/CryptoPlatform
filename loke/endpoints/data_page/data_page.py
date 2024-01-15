from flask import (
    Blueprint, flash, g, redirect, render_template, request, jsonify
)
from werkzeug.exceptions import abort
from loke.endpoints.auth import login_required
from loke.database.db import get_db
from loke.data_download.Hdf5 import Hdf5Client
from loke.data_download.BinanceClient import BinanceClient
from loke.data_download.data_collector import collect_all
from datetime import datetime
import importlib
import os
import json
import pandas as pd
import numpy as np
import ccxt


bp = Blueprint('data_page', __name__)


@bp.route('/data_dashboard', methods=('POST', 'GET'))
# @login_required
def data_dashboard():
    if request.method == 'POST':
        print("post")

    if request.method == 'GET':
        print("get")
        exchange = "binance"
        h5_db = Hdf5Client(exchange)
        pair_names = h5_db.get_all_dataset_names()
        pair_info = []
        for pair in pair_names:
            first_ts, last_ts = h5_db.get_first_last_timestamp(pair)
            first_ts = datetime.utcfromtimestamp(first_ts / 1000.0)
            last_ts = datetime.utcfromtimestamp(last_ts / 1000.0)
            pair_dict = {pair: (first_ts, last_ts)}
            pair_info.append(pair_dict)

        print("first last", pair_info)
        print(pair_info)
        return render_template('data_download/dashboard.html', pair_info=pair_info)


@bp.route('/download_coin', methods=('POST', 'GET'))
def download_coin():
    data = request.get_json()
    client = BinanceClient(False)
    print(data['coin'])
    collect_all(client, "binance", data['coin'])


@bp.route('/get_all_pairs', methods=('POST', 'GET'))
def get_all_pairs():

    if exchange == 'binance':
        exchange = ccxt.binance()

    markets = exchange.load_markets()
    pairs = list(markets.keys())
    spot = []
    margin = []
    for ticker in pairs:
        if ":" in ticker and "-" not in ticker:
            margin.append(ticker)
        elif "-" not in ticker:
            spot.append(ticker)

    data = {"margin": margin, "spot": spot}

    return data