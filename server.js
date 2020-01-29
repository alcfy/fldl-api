'use strict';

const express = require('express');
const server = express();
const port = parseInt(process.env.PORT, 10) || 3000;
const router = require('./routers/index');

const { HOST } = process.env;

//TODO: add security check

server.use(router);

server.listen(port, () => console.log(`Server running on ${HOST}:${port}!`));
