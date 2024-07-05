import express from 'express'
import postMessage from './endpoints/postMessage.js'
import getMessage from './endpoints/getMessage.js'

const messageBuffer = [];

const app = express();
app.use(express.json());

postMessage(app, '/message', messageBuffer);
getMessage(app, '/message/:messageId', messageBuffer);

app.listen(3001, () => {
    console.log(`Server's running`);
});