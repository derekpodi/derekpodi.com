from sanic import Sanic
from sanic.response import json
from sanic.response import html
app = Sanic()

import yfinance as yf
import pandas as pd


@app.route('/')
@app.route('/<path:path>')
async def post_json(request, path=""):
    ticker = yf.Ticker(str(request.args.get("name")))
    df = pd.DataFrame(ticker.recommendations)
    count = pd.DataFrame(df["To Grade"].value_counts())
    #to_send_json = pd.DataFrame.to_json(count, orient="index", indent=2)
    to_send_html = pd.DataFrame.to_html(count)
    #return json(to_send_json)
    return html(to_send_html)
    