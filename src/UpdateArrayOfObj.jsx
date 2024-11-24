import React, { useState } from "react";


function UpdateArrayOfObj() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        setCars(previousCars => [...previousCars, { year: carYear, make: carMake, model: carModel }]);
    }

    function handleRemoveCar(index) {
        const newCars = [...cars];
        newCars.splice(index, 1);
        setCars(newCars);
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }
    return (
        <div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>
                        {car.year} {car.make} {car.model}
                        <button onClick={() => handleRemoveCar(index)}>Remove</button>
                    </li>
                ))}
            </ul>
                <input type="number" value={carYear} onChange={handleYearChange} placeholder="Enter year" /><br/>
                <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter make" /><br/>
                <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter model" /><br/>
                <button onClick={handleAddCar}>Add Car</button>
        </div>

    )
}

export default UpdateArrayOfObj;