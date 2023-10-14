from flask import Blueprint, jsonify, request
from db.mysqlConnection import executeQuery

testHandler = Blueprint('test', __name__)

@testHandler.route('/ping', methods=['GET'])
def ping():
    return jsonify({'message': 'pong'})

@testHandler.route('/connection', methods=['GET'])
def connection():
    try:
        result = executeQuery('SHOW DATABASES')
        return jsonify({'message': 'connection successful', 'data': result})
    except Exception as e:
        return jsonify({'message': 'connection failed'})