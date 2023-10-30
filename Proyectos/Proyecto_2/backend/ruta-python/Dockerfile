# Etapa de construcción
FROM python:3.13.0a1-alpine3.18
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "api.py"]

# docker build -t daniel499/api_python:2.0.0 .