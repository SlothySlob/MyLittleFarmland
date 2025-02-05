// Import express module
const express = require('express');
const app = express();
const port = 3000;  // You can change the port if needed

// Serve static files (your front-end code) from a 'public' folder
app.use(express.static('public'));

// Root route: You can change this to any URL you'd like
app.get('/', (req, res) => {
  res.send('Hello, welcome to the farming game backend!');
});

// API route: Example of a route you can use for game data (this is just an example)
app.get('/api/game', (req, res) => {
  const gameData = {
    message: "This is the farming game API.",
    plots: [] // You can populate this with your game data.
  };
  res.json(gameData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});