import React, { useState } from 'react';

function Counter () {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }
  return (
    <div className="counter-container">
        <p className="counter-display">{count}</p>
        <button className="counter-button-increment" onClick={increment}>Increment</button>
        <button className="counter-button-decrement" onClick={decrement}>Decrement</button>
        <button className="counter-button-reset" onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;