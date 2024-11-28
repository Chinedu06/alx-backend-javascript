const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '' && !line.startsWith('firstname'));
      const students = {};

      for (const line of lines) {
        const [firstname, , , field] = line.split(',');

        if (field) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        }
      }

      const output = [`Number of students: ${lines.length}`];
      for (const [field, names] of Object.entries(students)) {
        output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(output.join('\n'));
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    const database = process.argv[2];
    countStudents(database)
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
