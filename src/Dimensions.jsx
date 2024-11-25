import React, {useState, useEffect} from "react";

function Dimensions() {

    const [ width, setWidth ] = useState(window.innerWidth);
    const [ height, setHeight ] = useState(window.innerHeight);
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("EVENT LISTENER ADDED")
        return () => {
            window.removeEventListener('resize', handleResize); //clean up
            console.log("EVENT LISTENER REMOVED")
        }
    }, []);

    useEffect(() => {
        document.title= `${width} x ${height}`
    }
    , [width,height]);
  return (
    <>
        <p> Window width : {width} px</p>
        <p> Window height : {height} px</p>
    </>
  );
}

export default Dimensions;