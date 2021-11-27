const fs = require('fs');

const writeFile = (file, data) => {
  fs.appendFile(file, `${data}\r\n`, (err) => {
    if (err) throw err;
  });
};

module.exports = writeFile;
