import React, { useState } from 'react';
import './App.css'; // We will style this next

function App() {
  const [roses, setRoses] = useState([]);

  const addRose = () => {
    const newRose = {
      id: Date.now(),
      x: Math.random() * 90,       // Random horizontal position (0-90%)
      y: Math.random() * 80 + 10,  // Random vertical position (10-90%)
      size: Math.random() * 2 + 2, // Random size between 2rem and 4rem
      rotation: Math.random() * 360, // Random tilt
      delay: Math.random() * 0.5   // Slight animation delay for natural feel
    };
    setRoses([...roses, newRose]);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Happy Rose Day! 🌹</h1>
        <p>I can't be there to give you real flowers today, so I made you an infinite garden.</p>
        
        <button onClick={addRose} className="rose-btn">
          Click for a Rose
        </button>

        <p className="counter">
          Roses Collected: <strong>{roses.length}</strong>
        </p>
      </div>

      {/* The Rose Field */}
      {roses.map((rose) => (
        <span
          key={rose.id}
          className="rose"
          style={{
            left: `${rose.x}%`,
            top: `${rose.y}%`,
            fontSize: `${rose.size}rem`,
            transform: `rotate(${rose.rotation}deg)`,
            animationDelay: `${rose.delay}s`
          }}
        >
          🌹
        </span>
      ))}
    </div>
  );
}

export default App;