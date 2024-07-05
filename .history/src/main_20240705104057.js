import express from 'express'
import * as constants from 'constants'

const app = express();

app.listen(constants.PORT, () => {
    console.log(`Server's running`);
  });