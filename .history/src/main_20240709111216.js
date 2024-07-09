import express from 'express'
import cors from 'cors';
import path from 'path'
import {fileURLToPath} from 'url';
import postMessage from './endpoints/postMessage.js'
import getMessage from './endpoints/getMessage.js'
import getPage from './endpoints/getPage.js'
import getOnline from './endpoints/getOnline.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const messageBuffer = [];
const pendingRequests = [];

const app = express();
app.use(cors());
app.use(express.json({limit: '250mb'}));
app.use(express.static(path.join(__dirname, '../front')));

getPage(app, __dirname);
getOnline(app, '/online', pendingRequests);
postMessage(app, '/message', messageBuffer, pendingRequests);
getMessage(app, '/message/:messageId/:author', messageBuffer, pendingRequests);

app.listen(3001, () => {
    console.log(`Server's running`);

    //setInterval(() => {pendingRequests.length = 0}, 3000)
});