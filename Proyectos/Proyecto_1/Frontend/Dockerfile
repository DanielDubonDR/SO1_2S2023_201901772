# Etapa de construcción
FROM node:20-alpine3.17 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de ejecución
FROM nginx:1.25.2-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# docker build -t daniel499/monitor_client:1.0.0 .