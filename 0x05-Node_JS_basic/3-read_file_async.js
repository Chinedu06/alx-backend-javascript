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

      console.log(`Number of students: ${lines.length}`);
      for (const [field, names] of Object.entries(students)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
