import os
from dotenv import load_dotenv

load_dotenv()

dbConfig = {
    'host': os.getenv('DB_HOST'),
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD'),
    'database': os.getenv('DB_DATABASE'),
    'port': os.getenv('DB_PORT')
}

HOST_REDIS = os.getenv('HOST_REDIS')