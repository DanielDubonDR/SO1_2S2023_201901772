from flask import Flask, request, jsonify
from flask_cors import CORS
from routes.test import testHandler
from routes.notas import notasHandler

app = Flask(__name__)
cors = CORS(app, resources={r"/*":{"origin":"*"}})

app.register_blueprint(testHandler)
app.register_blueprint(notasHandler)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3000)