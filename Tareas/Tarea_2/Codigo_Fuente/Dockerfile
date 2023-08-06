FROM golang:1.20

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . .

EXPOSE 5000

RUN go mod download && go mod verify

CMD ["go", "run", "main.go"]