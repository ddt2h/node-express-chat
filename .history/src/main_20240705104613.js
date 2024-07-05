import express from 'express'
import * as constants from 'constants'
import MessageObject from './MessageObject'

const app = express();

app.listen(constants.PORT, () => {
    console.log(`Server's running`);
  });