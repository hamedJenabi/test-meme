import logo from './logo.svg';
import './App.css';
import MemeGenerator from './MemeGenerator';
import React, { useState, useEffect } from 'react';
function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('https://memegen.link/templates/')
      .then((res) => res.json())
      .then((result) => {
        setImages(result);
        console.log('Valann injaas', result);
      });
  }, []);
  console.log('Valann injaas', images);
  return (
    <div className="App">
      <MemeGenerator />
    </div>
  );
}

export default App;
