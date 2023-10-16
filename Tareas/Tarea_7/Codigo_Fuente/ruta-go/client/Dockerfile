# Etapa 1: Compilar la aplicación
FROM golang:1.21.0-alpine3.18 AS build

WORKDIR /app

COPY ["go.mod", "go.sum", "./"]
RUN go mod download

COPY . .
RUN go build -o myapp

# Etapa 2: Crear la imagen final
FROM alpine:3.18
WORKDIR /app
COPY --from=build /app/myapp .
CMD ["./myapp"]

# docker build -t daniel499/grpc_client:1.0.0 .