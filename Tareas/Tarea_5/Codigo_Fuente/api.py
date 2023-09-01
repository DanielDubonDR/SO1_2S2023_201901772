from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def root():
        return "Hola Mundo 201901772"

if __name__=='__main__':
        app.run(port=4000, host='0.0.0.0')