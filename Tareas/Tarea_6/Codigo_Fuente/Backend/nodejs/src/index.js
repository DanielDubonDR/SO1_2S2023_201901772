import app from "./app.js";
import http from "http";
import { Server as SocketServer } from "socket.io";
import redisData from "./sockets/socketRedis.js";
import { API_PORT } from "./config/credentials.js";



const server = http.createServer(app);
const httpServer = server.listen(API_PORT, () => {
    console.log(`Server is running on port ${API_PORT}`);
});

const io = new SocketServer(httpServer, {
    cors: {
        origin: '*',
    }
});
redisData(io);