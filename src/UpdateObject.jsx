import React, { useState } from 'react';

function UpdateObject() {
  const [car, setCar] = useState({ make: 'Ford', model: 'Mustang', year: 1969 });
  function handleYearChange(event) {
    setCar(previousCar =>({ ...previousCar, year: event.target.value }));
  }
    function handleMakeChange(event) {
        setCar(previousCar => ({ ...previousCar, make: event.target.value }));
    }
    function handleModelChange(event) {
        setCar({...car, model: event.target.value});
    }
  return (
    <div>
      <h1>Car Details</h1>
      <p> Your favourite car is: {car.year} {car.make} {car.model} </p>
        <input type="number" value={car.year} onChange={handleYearChange} /><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model}  onChange={handleModelChange} /><br/>
    </div>
  )

}

export default UpdateObject;