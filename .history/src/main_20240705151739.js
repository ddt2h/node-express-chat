import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url';
import postMessage from './endpoints/postMessage.js'
import getMessage from './endpoints/getMessage.js'
import getPage from './endpoints/getPage.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const messageBuffer = [];
const pendingRequests = [];

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../front')));

getPage(app, __dirname);
postMessage(app, '/message', messageBuffer, pendingRequests);
getMessage(app, '/message/:messageId', messageBuffer, pendingRequests);

app.listen(3001, () => {
    console.log(`Server's running`);
});