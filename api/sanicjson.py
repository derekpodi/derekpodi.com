from sanic import Sanic
from sanic.response import json
app = Sanic()


@app.route('/')
@app.route('/<path:path>')
async def post_json(request, path=""):
    return json({"received": True, "message": request.json, 'hello': path, "name": request.args.get("name")})
    