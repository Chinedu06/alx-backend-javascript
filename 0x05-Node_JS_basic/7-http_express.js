const express = require('express');
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

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];

  res.write('This is the list of our students\n');
  countStudents(database)
    .then((data) => {
      res.end(data);
    })
    .catch((err) => {
      res.end(err.message);
    });
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
