# Etapa de construcción
FROM node:20-alpine3.17
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]

# docker build -t daniel499/api_node:4.0.0 .