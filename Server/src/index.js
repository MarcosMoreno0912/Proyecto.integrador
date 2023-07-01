const server = require('./app.js');
const express = require('express');
const { conn } = require('./DB_connection.js');

const PORT = 3001;

server.listen(PORT, () => {
    conn.sync({ force: true });
	console.log('Server raised in port:' + PORT);
});

module.exports = server;