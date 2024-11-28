const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 1245;

app.locals.databaseFile = process.argv[2]; // Retrieve database file from command-line argument
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
