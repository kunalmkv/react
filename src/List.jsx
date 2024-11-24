

function List() {

    const fruits = ["apple", "banana", "cherry", "pineapple", "kiwi"];
    const fruitsCalories =[
        {id:1, name: "apple", calories: 95},
        {id:99, name: "banana", calories: 105},
        {id:3, name: "cherry", calories: 50},
        {id:4,name: "pineapple", calories: 452},
        {id:5,name: "kiwi", calories: 61}
    ]

    fruitsCalories.sort((a,b) => a.name.localeCompare(b.name))
    const lowerCalorieFruits = fruitsCalories.filter((fruit) => fruit.calories < 100);
    const fruitsCaloriesList = fruitsCalories.map((fruit) => <li key={fruit.id}>{fruit.name}  : &nbsp;
                                                                     <b>{fruit.calories}</b> </li>);
    const listItems = fruits.map((fruit) => <li>{fruit}</li>);

    return (
        <>
        <ol>{listItems}</ol>
        <ol>{fruitsCaloriesList}</ol>
        </>
    );



}

export default List;