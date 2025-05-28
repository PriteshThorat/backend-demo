require('dotenv').config()

const express = require('express');

const app = express();
const port = process.env.PORT;

const data = {
  "name": "my-express-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send("<h1>Welcome to Login</h1>");
});

app.get('/signup', (req, res) => {
  res.send("<h2>Welcome to Signup</h2>")
})

app.get('/getjson', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})