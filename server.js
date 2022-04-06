const { Router } = require('express');
const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send('home');
});

app.get('/board', (req, res) => {
	// console.log(req);
	const boardId = req.query.boardId;
	switch (boardId) {
		case 'notice':
			res.send('<h1>NOTICE</h1>');
			break;
		case 'qna':
			res.send('<h1>QNA</h1>');
			break;
		case 'faq':
			res.send('<h1>FAQ</h1>');
			break;
		default:
			res.send('<h1>게시판이 없습니다.</h1>');
			break;
	}
	res.send('board');
});

app.get('/new_board/:boardId', (req, res) => {
	// console.log(req);
	const boardId = req.params.boardId;
	switch (boardId) {
		case 'notice':
			res.send('<h1>NOTICE</h1>');
			break;
		case 'qna':
			res.send('<h1>QNA</h1>');
			break;
		case 'faq':
			res.send('<h1>FAQ</h1>');
			break;
		default:
			res.send('<h1>게시판이 없습니다.</h1>');
			break;
	}
	res.send('board');
});

app.use((req, res) => {
	res.send('Error 404 Not Found Page');
});

app.listen(3000, () => console.log('Server Running'));
