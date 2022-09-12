const express = require('express');
const helmet = require('helmet');
require('dotenv').config();


const { PORT = 3001, NODE_ENV } = process.env;

const app = express();
app.use(helmet());




app.listen(PORT, () => {
    console.log('Server has been started');
});
