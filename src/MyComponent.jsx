import React, {useState} from "react";

function MyComponent() {

    const [name, setName]= useState("Guest")
    const [age, setAge] = useState(25)
    const [address, setAddress] = useState("Mumbai")
    const [isEmployed, setIsEmployed] = useState(false)
    const updateName = () => {
        setName("Kunal")
    }
    const updateAge = () => {
        setAge(age+1)
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }
  return (
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p> Is Employed : {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Employment Status</button>
        <button onClick={updateName}>Set Name</button>
        <button onClick={updateAge}>Set Age</button>


    </div>
  );
}

export default MyComponent;