const writeFile = require('../services/Log');

const NotFoundPage = (req, res) => {
  const { method } = req;

  if (method === 'GET') {
    writeFile('./logs/routes.txt', `Route to Not Found Page, ${new Date().toLocaleString()}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end();
  }
};

module.exports = NotFoundPage;
