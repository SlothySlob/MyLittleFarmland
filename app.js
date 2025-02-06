// Import express module
const express = require('express');
const app = express();
const port = 3000;  // You can change the port if needed
const path = require('path'); // Required for working with file paths

// Serve static files (e.g., images, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the 'index.html' when visiting the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Root route: You can change this to any URL you'd like
app.get('/test', (req, res) => {
  res.send('Hello, welcome to the farming game backend!');
});

// API route: Example of a route you can use for game data (this is just an example)
// app.get('/api/game', (req, res) => {
//   const gameData = {
//     message: "This is the farming game API.",
//     plots: [] // You can populate this with your game data.
//   };
//   res.json(gameData);
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});