import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const MultiplayerCursors = () => {
  const [cursors, setCursors] = useState({});
  const [socketId, setSocketId] = useState(null);

  useEffect(() => {
    // Connect to local WebSocket server
    const socket = io('http://localhost:3001');

    socket.on('init', (data) => {
      setSocketId(data.id);
      setCursors(data.cursors);
    });

    socket.on('cursorAdd', (data) => {
      setCursors(prev => ({ ...prev, [data.id]: data }));
    });

    socket.on('cursorUpdate', (data) => {
      setCursors(prev => {
        if (!prev[data.id]) return prev;
        return {
          ...prev,
          [data.id]: { ...prev[data.id], x: data.x, y: data.y }
        };
      });
    });

    socket.on('cursorRemove', (id) => {
      setCursors(prev => {
        const newCursors = { ...prev };
        delete newCursors[id];
        return newCursors;
      });
    });

    // Throttle mouse movement to avoid flooding server
    let lastEmit = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastEmit > 30) { // ~30fps max
        socket.emit('cursorMove', { x: e.clientX, y: e.clientY });
        lastEmit = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      socket.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {Object.entries(cursors).map(([id, cursor]) => {
        if (id === socketId || cursor.x === 0) return null; // Don't render own cursor
        return (
          <div
            key={id}
            className="absolute top-0 left-0 flex flex-col items-start transition-all duration-75 ease-linear"
            style={{ 
              transform: `translate(${cursor.x}px, ${cursor.y}px)`,
              color: cursor.color 
            }}
          >
            {/* SVG Cursor Icon */}
            <svg 
              width="24" 
              height="36" 
              viewBox="0 0 24 36" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-xl"
              style={{ stroke: 'white', strokeWidth: 1.5 }}
            >
              <path d="M5.65376 2.15376C5.40428 1.90428 5 2.08115 5 2.43385V33.5662C5 33.9188 5.40428 34.0957 5.65376 33.8462L13.1538 26.3462H21.5662C21.9188 26.3462 22.0957 25.9419 21.8462 25.6924L5.65376 2.15376Z" />
            </svg>
            <div className="ml-4 -mt-2 px-2 py-0.5 bg-slate-900/80 backdrop-blur-sm text-[10px] rounded text-white border shadow-lg border-white/20 whitespace-nowrap" style={{ borderColor: cursor.color }}>
              Visitor {id.slice(0, 4)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MultiplayerCursors;
