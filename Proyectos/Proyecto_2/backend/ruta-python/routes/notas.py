from flask import Blueprint, jsonify, request
from db.mysqlConnection import executeNonQuery
from config.credentials import HOST_REDIS
import redis
import json

notasHandler = Blueprint('notas', __name__)
redis_client = redis.Redis(host=HOST_REDIS, port=6379, db=4)

@notasHandler.route('/set/nota', methods=['POST'])
def setNota():
    try:
        carnet = request.json['carnet']
        nombre = request.json['nombre']
        curso = request.json['curso']
        nota = request.json['nota']
        semestre = request.json['semestre']
        year = request.json['year']

        status = executeNonQuery("INSERT INTO NOTAS (carnet, nombre, curso, nota, semestre, year) VALUES (%s, %s, %s, %s, %s, %s)", (carnet, nombre, curso, nota, semestre, year))

        nota = {
            'carnet': carnet,
            'nombre': nombre,
            'curso': curso,
            'nota': nota,
            'semestre': semestre,
            'year': year
        }

        cont = redis_client.incr('contador_notas')
        key = f'nota:{cont}'

        notasJson = json.dumps(nota)
        redis_client.set(key, notasJson)

        if status == True:
            return jsonify({'message': 'Nota registrada', 'data': request.json})
        else:
            return jsonify({'message': 'Error al agregar nota', 'data': 'null'})
    except Exception as e:
        return jsonify({'message': 'error', 'data': str(e)})
