const server = require('./app.js')
const express = require('express')

const PORT = 3001;

server.listen(PORT, () => {
	console.log('Server raised in port:' + PORT);
});

module.exports = server;