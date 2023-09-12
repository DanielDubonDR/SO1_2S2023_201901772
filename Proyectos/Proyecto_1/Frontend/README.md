# 💻Frontend

Este frontend esta realizado con el framework React v18.2.0

## 📌Instalación

- Establecerse la raiz de la carpeta Frontend y abrir una terminal en esa ruta
- Instalar todas las dependecias del proyecto usando el comando `npm install`

## 🧩Levantar la aplicación

- Ejecutar el comando `npm run dev`
- En la terminal persionar la letra `o` para que abra automaticante la aplicacion o bien coloclar en el navegador la siguiente ruta `http://localhost:5173`

## 📑Consumo de API

| Ruta | Tipo de peticion | Descripción |
|:----------:|:----------:|:----------:|
| `http://localhost:4000/executeCode`   | POST   | Esta petición permite enviar el código del editor hacia la API usando un objeto json de la forma `{"code": "codigo..."}` y este recibe un response de la forma `{ "consola": "contenido consola" }` que servira para poder mostrar el resultado en la consola de la aplicación