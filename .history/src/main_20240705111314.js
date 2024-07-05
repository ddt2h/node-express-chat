import express from 'express'
import * as constants from 'constants'
import postMessage from './endpoints/postMessage.js'

const messageBuffer = [];

const app = express();

postMessage(app, '/message', messageBuffer);
console.log(constants.PORT);
app.listen(constants.PORT, () => {
    console.log(`Server's running`);
});