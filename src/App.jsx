import './App.css';
import React, { useState } from 'react';

function App() {
  console.log('Loading App component....');

  const [count, setCount] = useState(4);
 
  const decrementCount = () => {
    setCount (preCount => preCount - 1);
  }

  const incrementCount = () => {
    setCount (preCount => preCount + 1);
  }
  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <h1>COUNT: {count}</h1>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
