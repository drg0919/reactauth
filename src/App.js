import React from 'react';
import './Components.css';
import './App.css';
import Navbar from './components/Navbar';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Canvas>
        <h2>Hello</h2>
      </Canvas>
    </div>
  );
}

export default App;
