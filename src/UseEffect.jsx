import React, { useState, useEffect } from "react";
function UseEffect() {
  const [count, setCount] = useState(0);
  const [colour, setColour] = useState("red");

  useEffect(() => {
    document.title = `${count} : ${colour}`;
  }, [count, colour]);

  function increment() {
    setCount(previousCount => previousCount + 1);
    }
    function decrement() {
        setCount(previousCount => previousCount - 1);
    }
    function changeColour () {
        setColour((c) => (c === "red" ? "green" : c === "green" ? "blue" : "red"));
    }
  return (
   <>
       <p style={ {color: colour}}> Count : {count}</p>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button><br/>
         <button onClick={changeColour}>Change Colour</button>
   </>
  );
}

export default UseEffect;