from config.credentials import dbConfig
import mysql.connector

pool = mysql.connector.pooling.MySQLConnectionPool(
    pool_size = 25,
    **dbConfig
)

def getConnection():
    return pool.get_connection()

def executeQuery(query, params=None):
    connection = getConnection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute(query, params)
    result = cursor.fetchall()
    cursor.close()
    connection.close()
    return result

def executeNonQuery(query, params=None):
    connection = getConnection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute(query, params)
    connection.commit()
    cursor.close()
    connection.close()
    return True