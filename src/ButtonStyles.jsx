// styles inside the jsx file : called inline styles

function ButtonStyles(){

    const styles ={
        backgroundColor: "hsl(0,0%,90%)",
    border: "none",
    color: "hsl(0,0%,20%)",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: "5px",
    margin: "10px",
    cursor: "pointer"
    }
    return <button className={
        "button"
    } style={styles} >Click me 1</button>
}

export default ButtonStyles;