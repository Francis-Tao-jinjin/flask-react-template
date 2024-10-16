from flask import (Blueprint, jsonify, request, g)

stock_api = Blueprint('debug', __name__, url_prefix='/api/debug')

@stock_api.route('/debug/<symbol>', methods=('GET',))
def debug_api(symbol):
    args = request.args.to_dict()
    return jsonify(args)
