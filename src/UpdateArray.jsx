import React, { useState } from "react";

function UpdateArray() {
  const [foods, setFoods] = useState([ "apple", "banana", "cherry", "pineapple", "kiwi" ]);

  function handleAddFood() {
    const newFoods = document.getElementById("foodInput").value;
    setFoods(previousFoods =>[...previousFoods, newFoods]);
  }

  function handleRemoveFood(index) {
    const newFoods = [...foods];
    newFoods.splice(index, 1);
    setFoods(newFoods);

  }
  return (
    <div>
      <h2> List of Food</h2>
        <ul>
            {foods.map((food, index) => (
                <li key={index}>
                    <input
                        type="text"
                        value={food}
                        onChange={(e) => {
                            const newFoods = [...foods];
                            newFoods[index] = e.target.value;
                            setFoods(newFoods);
                        }}
                    />
                    <button onClick={() => handleRemoveFood(index)}>Remove</button>
                </li>
            ))}
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </ul>
    </div>
  );
}

export default UpdateArray;