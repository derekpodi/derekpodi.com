from sanic import Sanic
from sanic import response
from sanic.response import json
#from sanic.response import html
#from sanic.response import text
app = Sanic()

import yfinance as yf
import pandas as pd
import json



@app.route('/')
@app.route('/<path:path>')
async def post_json(request, path=""):
    #return text(request.args)

    ticker = yf.Ticker(str(request.args.get("name")))
    df = pd.DataFrame(ticker.recommendations)
    count = pd.DataFrame(df["To Grade"].value_counts())

    #JSON return
    to_send_json = pd.DataFrame.to_json(count)
    fix = json.dumps(json.JSONDecoder().decode(to_send_json), indent=4)
    return response.json(fix)


    #HTML retun
    #to_send_html = pd.DataFrame.to_html(count)
    #return html(to_send_html)
    
    #YF return
    #return json(ticker.info)