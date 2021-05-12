const express = require('express');
const routes = require('./routes');
// require('express-async-errors');

const app = express();

app.use(express.json());

app.use(routes);

// app.use( ( error, request, response, next) => {
// 	console.log(error);

// 	response.status(500).json({
// 		status: "error",
// 		message: "erro interno"
// 	})
// });

app.listen(3000, () => console.log('server running'));