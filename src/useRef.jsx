import React, { useRef, useState } from "react";

function CounterExample() {
    const countRef = useRef(0);
    const [state, setState] = useState(0);

    const incrementCount = () => {
        countRef.current += 1; // Update the mutable value
        console.log("Mutable Count (no re-render):", countRef.current);
        setState(state + 1); // Update state to trigger re-render
    };

    return (
        <div>
            <p>State Count: {state}</p>
            <p>Mutable Ref Count: {countRef.current}</p>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
}

export default CounterExample;
