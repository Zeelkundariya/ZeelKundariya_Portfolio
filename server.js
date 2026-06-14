import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins for dev
    methods: ["GET", "POST"]
  }
});

const cursors = {};

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);
  
  // Generate random bright color
  const hue = Math.floor(Math.random() * 360);
  const color = `hsl(${hue}, 100%, 50%)`;
  
  cursors[socket.id] = { x: 0, y: 0, color };
  
  // Send the current list of cursors to the new user
  socket.emit('init', { id: socket.id, cursors });
  
  // Broadcast new user to everyone else
  socket.broadcast.emit('cursorAdd', { id: socket.id, ...cursors[socket.id] });
  
  socket.on('cursorMove', (data) => {
    if (cursors[socket.id]) {
      cursors[socket.id].x = data.x;
      cursors[socket.id].y = data.y;
      socket.broadcast.emit('cursorUpdate', { id: socket.id, x: data.x, y: data.y });
    }
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    delete cursors[socket.id];
    io.emit('cursorRemove', socket.id);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Socket.io server running on port ${PORT}`);
});
