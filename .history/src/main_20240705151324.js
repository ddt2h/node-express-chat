import express from 'express'
import path from 'path'
import postMessage from './endpoints/postMessage.js'
import getMessage from './endpoints/getMessage.js'

const messageBuffer = [];
const pendingRequests = [];

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

postMessage(app, '/message', messageBuffer, pendingRequests);
getMessage(app, '/message/:messageId', messageBuffer, pendingRequests);

app.listen(3001, () => {
    console.log(`Server's running`);
});