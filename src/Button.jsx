



function Button() {
    let count=0;
    const handleClick = () => {

        if(count <3){
            count++;
            console.log(`Button clicked ${count} times`)
        }
        else{
            console.log("Button clicked more than 3 times")
        }
        console.log("Button clicked")
    }
    const handleClick2 = (name) => {
        console.log(`Button clicked with name ${name}`)
    }
    const handleClickEvent = (e) => {
        e.target.textContent = "OOOuch"
        console.log(e)
    }
    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClick2("kunal")}>Click Me kunal</button>
<button onDoubleClick={(e)=>handleClickEvent(e)}> click me brooo </button>
        </>
    )

}


export default Button;