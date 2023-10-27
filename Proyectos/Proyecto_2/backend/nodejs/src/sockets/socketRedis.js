import redisConnect from "../db/redisConnection.js";

const redisData = (io) => {

    redisConnect.on('connect', () => {
        console.log('Redis client connected');

        io.on('connection', (socket) => {
            console.log('New user connected');
            socket.on('disconnect', () => {
                console.log('User disconnected');
            });
    
            const emitData = async () => {
                const keys = await redisConnect.keys('*');
                let index = keys.indexOf('album:cont');
                if (keys.length > 0) {
                    if (index !== -1) {
                        keys.splice(index, 1);
                    }
                    
                    const data = await redisConnect.mget(keys);
                    
                    const json = data.map((item) => {
                        return JSON.parse(item);
                    });
    
                    socket.emit('redis', json);
                }
            }
    
            setInterval(emitData, 1000);
        });

    });

    redisConnect.on('error', (err) => {
        console.log(`Something went wrong ${err}`);
    });
}

export default redisData;