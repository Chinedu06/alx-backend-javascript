const fs = require('fs');
const path = require('path');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const absolutePath = path.resolve(filePath);
    fs.readFile(absolutePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = {};
      const lines = data.trim().split('\n').slice(1);

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!students[field]) students[field] = [];
        students[field].push(firstname);
      });

      resolve(students);
    });
  });
}

module.exports = readDatabase;
