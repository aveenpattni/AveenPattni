const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "client/build")));

app.listen(PORT,() => {
  console.log(`Listening on Port: ${PORT}`);
  console.log("Stop with Ctrl+C");
});