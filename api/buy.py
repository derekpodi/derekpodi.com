from sanic import Sanic
from sanic.response import json
app = Sanic()

import yfinance as yf
import pandas as pd

@app.route('/')
@app.route('/<path:path>')
async def post_json(request, path=""):
    ticker = yf.Ticker(str(request.args.get("name")))
    df = pd.DataFrame(ticker.recommendations)
    count = pd.DataFrame(df["To Grade"].value_counts())
    to_send = pd.DataFrame.to_json(count)
    return json(to_send)
    