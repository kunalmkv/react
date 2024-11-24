import React, { useState } from 'react';
function UpdaterFunction() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count => count + 1);
    setCount(count => count + 1);
  }

  function decrement() {
    setCount(count => count - 1);
    setCount(count => count - 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UpdaterFunction;