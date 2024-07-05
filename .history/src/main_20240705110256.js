import express from 'express'
import * as constants from 'constants'
import postMessage from './endpoints/postMessage'

const messageBuffer = [];

const app = express();

postMessage(app, '/message', messageBuffer);

app.listen(constants.PORT, () => {
    console.log(`Server's running`);
});