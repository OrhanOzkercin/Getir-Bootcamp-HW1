const axios = require('axios');

const getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts/');

module.exports = getPosts;
