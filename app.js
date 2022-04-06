const express = require('express');
const app = express();
// import calc from './calc.js';
const fs = require('fs');
const moment = require('moment');

app.get('/', function (req, res) {
	const name = req.query.name || 'Guest';
	const nowDate = moment().format('YYYY-MM-DD');
	res.send(`
  <!doctype html>
  <html lang="ko">
  <head>
    <title>Hello node</title>
  </head>
  <body>
  <h1>Hello ${name} / ${nowDate}</h1>
  </body>
  </html>
  `);
	/* console.log(__dirname + '/abc');
	fs.mkdir(__dirname + '/abc', err => {
		console.log(err);
	}); */
});

app.get('/test', function (req, res) {
	const name = req.query.name || 'Guest';
	res.send('Test ' + name);
});

app.get('/sample/:name', function (req, res) {
	const name = req.params.name || 'Guest';
	res.send('Sample ' + name);
});

app.listen(3000);
