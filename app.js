const http = require('http');

const postPage = require('./routes/Postpage');
const homePage = require('./routes/Homepage');
const notFoundPage = require('./routes/NotFoundpage');

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    homePage(req, res);
  }
  else if (url === '/api/posts') {
    postPage(req, res);
  }
  else if (url === '/favicon.ico') {
    res.statusCode = 204;
    res.end();
  }
  else {
    notFoundPage(req, res);
  }
});

server.listen(3000);
