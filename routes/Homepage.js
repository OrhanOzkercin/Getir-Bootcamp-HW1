const writeFile = require('../services/Log');

const HomePage = (req, res) => {
  const { method } = req;

  if (method === 'GET') {
    writeFile('./logs/routes.txt', `Route to homepage, ${new Date().toLocaleString()}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end();
  }
};

module.exports = HomePage;
