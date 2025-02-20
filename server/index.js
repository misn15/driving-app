// server/index.js

const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.use((req, res) => {
    res.status(200).send('Hello, world!');
});

app.listen(8080, () => {
  console.log(`Server listening on ${PORT}`);
});