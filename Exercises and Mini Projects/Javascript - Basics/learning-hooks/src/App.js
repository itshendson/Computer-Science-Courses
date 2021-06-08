import React, { useState } from "react";

// Hooks can only be used inside function component, it can never be used in class components!

//This function should only run once!!
function countInitial() {
  console.log('This should only be ran once')
  return 0
}

function App() {
  const [count, setCount] = useState(() => countInitial())
  const [theme, setTheme] = useState('rainbow')

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
    setTheme('red')
  }

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
    setTheme('blue')
  }

  return (
    <div className="App">
      <button onClick={incrementCount}>+</button>
      <div>{count}</div>
      <div>{theme}</div>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default App;
