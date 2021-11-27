const getPosts = require('../services/Post');
const writeFile = require('../services/Log');

const PostPage = (req, res) => {
  const { method } = req;

  if (method === 'GET') {
    getPosts().then(({ data }) => {
      writeFile('./logs/requests.txt', `Read all posts, ${new Date().toLocaleString()}`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    });
  }
};

module.exports = PostPage;
