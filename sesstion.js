const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'fasdfdsfasfaf23423424', // Change this to a secret key of your choice
  resave: false,
  saveUninitialized: false
}));

// Define your routes or middleware here
app.get('/set-session', (req, res) => {
  req.session.username = 'JohnDoe';
  res.send('Session value set');
});

app.get('/get-session', (req, res) => {
  const username = req.session.username;
  res.send(`Session value: ${username}`);
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});