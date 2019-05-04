const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
console.log(process.env);

app.use(express.static('client'));

app.get('/joke', (req, res) => {
  res.send("<h1>How many apples grow on a tree?</h1><h2>All of them.</h2>");
})

app.listen(PORT,() => {
  console.log(`Listening on Port: ${PORT}`);
  console.log("Stop with Ctrl+C");
});