import Redis from 'ioredis';
import { redisConfig } from '../config/credentials.js';

const redisConnect = new Redis({
    host: redisConfig.host,
    port: redisConfig.port,
    db: 4
});

export default redisConnect;