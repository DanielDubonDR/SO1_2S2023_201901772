# Etapa de construcción
FROM node:20-alpine3.17
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]

# docker build -t daniel499/frontend_notas:1.0.0 .