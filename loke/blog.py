from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for, jsonify
)
from werkzeug.exceptions import abort

from loke.auth import login_required
from loke.database.db import get_db
import importlib
import os
import json
from loke.trading_engine.Strategy import Strategy
from loke.trading_engine.indicators.momentum.Ao import Ao

from loke.trading_engine.indicators.momentum.Rsi import Rsi

# DOES NOT HAVE URL PREFIX SO INDEX = / CREATE = /CREATE
# app.add_url_rule() associates the endpoint name 'index' with the /
# url so that url_for('index') or url_for('blog.index') will both work,
# generating the same / URL either way.
bp = Blueprint('blog', __name__)


@bp.route('/add_indicator', methods=('POST', 'GET'))
@login_required
def add_indicator():
    if request.method == 'POST':
        data = request.get_json()  # Get the JSON data from the request
        indicator = data.get('indicator')  # Extract the 'indicator' value
        category = data.get('category')
        indicator = indicator.capitalize()
        module_path = f"loke.trading_engine.indicators.{category}.{indicator}"
        module = importlib.import_module(f"{module_path}")
        Obj = getattr(module, f"{indicator}")
        obj = Obj()
        indicator = obj.type_dict()
        indicator = jsonify(indicator)
        print(indicator)
        return indicator


def get_indicators():

    indicators = []
    module_path = "loke.trading_engine.indicators.momentum"
    folder_path = "loke/trading_engine/indicators/momentum"

    class_files = [file for file in os.listdir(
        folder_path) if file.endswith(".py") and file != "__init__.py"]

    # Loop through the Python files and import the classes
    for file_name in class_files:
        # Remove the ".py" extension
        module_name = os.path.splitext(file_name)[0]
        module = importlib.import_module(f"{module_path}")
        Obj = getattr(module, f"{module_name}")
        obj = Obj()
        indicators.append(obj.type_dict())

    return indicators


@bp.route('/')
def index():
    db = get_db()
    # strategies = db.execute(
    #     'SELECT p.strategy_id, strategy_name, info, created, fk_user_id, username'
    #     ' FROM strategies p JOIN user u ON p.fk_user_id = u.id'
    #     ' ORDER BY created DESC'
    # ).fetchall()

    strategies = db.execute('SELECT * FROM strategies').fetchall()

    return render_template('blog/index.html', strategies=strategies, )


@bp.route('/createstrat', methods=('GET', 'POST'))
@login_required
def createstrat():
    if request.method == 'POST':
        strategy_name = request.form['strategy_name']
        info = request.form['info']
        exchange = request.form['exchange']
        error = None

        if not strategy_name:
            error = 'strategy_name is required.'

        if error is not None:
            flash(error)
        else:
            db = get_db()

            db.execute(
                'INSERT INTO strategies (strategy_name, info, fk_user_id, fk_exchange_id)'
                ' VALUES (?, ?, ?, ?)',
                (strategy_name, info, g.user['id'], exchange)
            )
            db.commit()
            return redirect(url_for('blog.index'))
            cur = db.execute('SELECT COUNT(*) FROM strategies')

    if request.method == 'GET':
        ndicators = get_indicators
        indicators = [{'kind': 'ao', 'fast': 'int', 'slow': 'int', 'offset': 'int'}, {
            'kind': 'rsi', 'length': 'int', 'scalar': 'float', 'talib': 'bool', 'offset': 'int'}]

    return render_template('blog/createstrat.html', indicators=indicators)


def get_strategy(id, check_user=True):
    strategy = get_db().execute(
        'SELECT p.strategy_id, strategy_name, info,expression, created, fk_user_id, username'
        ' FROM strategies p JOIN user u ON p.fk_user_id = u.id'
        ' WHERE p.strategy_id = ?',
        (id,)
    ).fetchone()

    if strategy is None:
        abort(404, f"strategy id {id} doesn't exist.")
    print(strategy)
    # print(strategy['fk_user_id'])
    print(g.user['id'])
    if check_user and strategy['fk_user_id'] != g.user['id']:
        abort(403)

    return strategy


def get_post(id, check_author=True):
    post = get_db().execute(
        'SELECT p.id, title, body, created, author_id, username'
        ' FROM post p JOIN user u ON p.author_id = u.id'
        ' WHERE p.id = ?',
        (id,)
    ).fetchone()

    if post is None:
        abort(404, f"Post id {id} doesn't exist.")

    if check_author and post['author_id'] != g.user['id']:
        abort(403)

    return post


# @bp.route('/<int:strategy_id>/get_settings', methods=('GET',))
# @login_required
# def convert_indicator(strategy_id):
#     db = get_db()

#     return render_template('blog/updatestrat.html', strategy=strategy, indicators=indicators)


@bp.route('/<int:strategy_id>/convert_indicator', methods=('POST',))
@login_required
def convert_indicator(strategy_id):
    print(strategy_id)
    if request.method == 'POST':
        data = request.get_json()  # Get the JSON data from the request
        print(data)
        indicator = {}
        for item in data:
            key, value = item
            indicator[key] = value
        print(indicator)
        json_dict = json.dumps(indicator)
        db = get_db()
        db.execute('INSERT INTO strategy_indicators (fk_strategy_id, fk_user_id, indicator_name, settings) VALUES (?,?,?,?)',
                   (strategy_id, g.user['id'], indicator['kind'], json_dict))
        db.commit()

        return jsonify({'message': 'Response from conver'})


# converts to int automatically
@bp.route('/<int:id>/stratupdate', methods=('GET', 'POST'))
@login_required
def stratupdate(id):
    strategy = get_strategy(id)
    print("Strategy Data:", strategy)
    if request.method == 'POST':
        strategy_name = request.form['strategy_name']
        info = request.form['info']
        error = None

        if not strategy_name:
            error = 'strategy_name is required.'

        if error is not None:
            flash(error)
        else:
            db = get_db()
            db.execute(
                'UPDATE strategies SET strategy_name = ?, info = ?'
                ' WHERE strategy_id = ?',
                (strategy_name, info, id)
            )
            db.commit()
            return redirect(url_for('blog.index'))
    if request.method == 'GET':
        indicators = [{'kind': 'ao', 'fast': 'int', 'slow': 'int', 'offset': 'int'}, {
            'kind': 'rsi', 'length': 'int', 'scalar': 'float', 'talib': 'bool', 'offset': 'int'}]
        # settings = db.execute(
        #     'SELECT * FROM strategy_indicators WHERE fk_strategy_id = ?',
        #     (id,)
        # ).fetchall()
        # print(settings)
    return render_template('blog/updatestrat.html', strategy=strategy, indicators=indicators)


@bp.route('/<int:id>/deletestrat', methods=('POST',))
@login_required
def deletestrat(id):
    get_strategy(id)
    db = get_db()
    db.execute('DELETE FROM strategies WHERE strategy_id = ?', (id,))
    db.commit()
    return redirect(url_for('blog.index'))


@bp.route('/<int:id>/update_chart', methods=['POST'])
@login_required
def update_chart(id):
    print(id)
    db = get_db()

    # Your code to generate or fetch new content
    new_content = "New content fetched from the server"
    return jsonify({'content': new_content})


@bp.route('/init_strategy', methods=['POST', 'GET'])
def init_strategy():
    if request.method == "POST":
        data = request.get_json()
        strategy_id = data['strategy_id']
        exchange = data['exchange']
        init_candles = ['init_candles']
        symbol = data['symbol']
        name = data['name']
        description = data['description']

        rsi = Rsi()
        rsi.set(20, 50, 0)
        ao = Ao()
        ao.set(15, 15, 0)

        print(f"{rsi.type_dict()}")

        s = Strategy(exchange, init_candles, symbol, name, description)
        s.addIndicators([
            # {"kind": "rsi", "length": 15, "scalar": 40},
            rsi.get(),
            ao.get(),
            {"kind": "ema", "length": 8},
            {"kind": "ema", "length": 21},
            {"kind": "bbands", "length": 20},
            {"kind": "macd", "fast": 8, "slow": 21}
        ])
        df = s.create_strategy()
        df = df.head(215)
        df.to_json("lol.json", orient='records', compression='infer')
        print(df.columns)
        columns = s.column_dict()
        # df_bytes = pickle.dumps(df)
        # cache.set('df_cache_key', df_bytes)
        resp = {"message": f'{df}'}
        return jsonify(resp)
