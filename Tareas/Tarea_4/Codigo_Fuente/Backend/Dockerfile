# Etapa 1: Compilar la aplicación
FROM golang:1.21.0-alpine3.18 AS build

WORKDIR /app

# COPY ["go.mod", "go.sum", "./"]
# RUN go mod download

COPY . .
RUN go build main.go

# Etapa 2: Crear la imagen final
FROM alpine:3.18
WORKDIR /app
COPY --from=build /app/main .
CMD ["./main"]

# docker run -it --rm --name ram -v /proc:/proc module