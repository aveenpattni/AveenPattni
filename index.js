const express = require('express');

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(__dirname + './client'));

app.listen(PORT,() => {
  console.log(`Listening on Port: ${PORT}`);
  console.log("Stop with Ctrl+C");
});