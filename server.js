const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Serve static files from the public folder
app.use(express.static('public'));

// Handle incoming WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle incoming game events
  socket.on('gameEvent', (event) => {
    console.log('Received game event:', event);

    // TODO: Broadcast the game event to all connected clients except the sender
  });

  // Handle incoming chat messages
  socket.on('chatMessage', (message) => {
    console.log('Received chat message:', message);

    // TODO: Broadcast the chat message to all connected clients
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
