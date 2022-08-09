const express = require('express');
const { connectDatabase } = require('./config/database.js');
const { PORT } = process.env || 4000;

const app = express();

connectDatabase();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
