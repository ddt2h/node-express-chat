import express from 'express'
import cors from 'cors';
import path from 'path'
import {fileURLToPath} from 'url';
import postMessage from './endpoints/postMessage.js'
import getMessage from './endpoints/getMessage.js'
import getPage from './endpoints/getPage.js'
import redis from 'redis'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const messageBuffer = [];
const pendingRequests = [];

const redisClient = redis.createClient();

const app = express();
app.use(cors());
app.use(express.json({limit: '250mb'}));
app.use(express.static(path.join(__dirname, '../front')));

getPage(app, __dirname);
postMessage(app, '/message', messageBuffer, pendingRequests);
getMessage(app, '/message/:messageId', messageBuffer, pendingRequests, redisClient);

app.listen(3001, () => {
    console.log(`Server's running`);
});