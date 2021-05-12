const express = require('express');
const exception = require('./middlewares/exception');
const routes = require('./routes');
require('express-async-errors');

const app = express();

app.use(express.json());

app.use(routes);

app.use(exception);

app.listen(3000, () => console.log('server running'));