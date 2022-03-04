const Express = require('express');
const cors = require('cors');
const router = require('./router');

// Server settings (PORT and CORS)
const SERVER_PORT = 3001;
const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
}

// Server Instance
const app = new Express();

app.use(cors(corsConfig));
app.use(Express.json());

// Router
app.use(router);

// Catch requests with invalid endpoints
app.get('*', (req, res) => {
  res.status(404);
  res.send('⛔️ Error, not found.');
});

app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(`⛔️ Sorry, something went wrong: ${err}`);
  } else {
    console.log(`🚀 Server running on http://localhost:${SERVER_PORT}`);
  }
});

// To add tests in the future, the server (app.listen function) needs to be exported