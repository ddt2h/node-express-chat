import express from 'express'
import postMessage from './endpoints/postMessage.js'

const messageBuffer = [];

const app = express();
app.use(json());

postMessage(app, '/message', messageBuffer);

app.listen(3001, () => {
    console.log(`Server's running`);
});