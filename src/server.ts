/// <reference path="../typings/index.d.ts" />

import path = require('path');
import fs = require('fs');
import http = require('http');
import express = require('express');

import { Rest } from './rest';
import { widgetDataAccess } from './widget-data-access';

export default function(config) {

	const app = express();
	const server = http.createServer(app);

	const io = require('socket.io')(server);

	io.on('connection', function (socket) {
	  socket.on('log', function (data) {
	    console.log(data.message);
	  });
	});

	app.use('/api', Rest.getRouter(widgetDataAccess));
	app.use('/assets', express.static(path.join(config.webServer.folder, '/assets')));
	app.use('/app.css', express.static(path.join(config.webServer.folder, '/app.css')));
	app.use('/app.js', express.static(path.join(config.webServer.folder, '/app.js')));
	app.use('/polyfills.js', express.static(path.join(config.webServer.folder, '/polyfills.js')));
	app.use('/vendor.js', express.static(path.join(config.webServer.folder, '/vendor.js')));

	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, 'www','index.html'));
	});

	server.listen(config.webServer.port, () =>
		console.log(`web server running on port ${config.webServer.port}
please do not close this terminal window
please use a new terminal window to run additional commands`));
}
