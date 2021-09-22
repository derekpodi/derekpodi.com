from sanic import Sanic
from sanic.response import json
app = Sanic()

@app.route("/json")
def post_json(request):
    return json({ "received": True, "message": request.json })