import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Card from './Card'
import Button from './Button/Button.jsx'
import './ButtonStyles.jsx'
import ButtonStyles from "./ButtonStyles.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ListProps from "./ListProps.jsx";
import ButtonNew from "./Button.jsx";
import ProfilePic from "./ProfilePic.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import OnChange from "./OnChange.jsx";
import ColourPicker from "./ColourPicker.jsx";
import UpdaterFunction from "./UpdaterFunction.jsx";
import UpdateObject from "./UpdateObject.jsx";
import UpdateArray from "./UpdateArray.jsx";
import UpdateArrayOfObj from "./UpdateArrayOfObj.jsx";
import ToDoList from "./ToDoList.jsx";
import UseEffect from "./UseEffect.jsx";
import Dimensions from "./Dimensions.jsx";

function App() {
    const router = createBrowserRouter([
        {path: "/", element: <ProfilePic />}
        ])

    const fruitsWithCalories = [
        {id:1, name: "apple", calories: 95},
        {id:99, name: "banana", calories: 105},
        {id:3, name: "cherry", calories: 50},
        {id:4,name: "pineapple", calories: 452},
        {id:5,name: "kiwi", calories: 61}
    ]

    const vegetablesWithCalories = [
        {id:1, name: "carrot", calories: 41},
        {id:99, name: "broccoli", calories: 55},
        {id:3, name: "spinach", calories: 23},
        {id:4,name: "kale", calories: 50},
        {id:5,name: "cabbage", calories: 25}
    ]

    const dryFruitsWithCalories = [
        {id:1, name: "almond", calories: 7},
        {id:99, name: "cashew", calories: 8},
        {id:3, name: "pistachio", calories: 6},
        {id:4,name: "walnut", calories: 6},
        {id:5,name: "raisin", calories: 3}
    ]
    return (
        <div>
            <Card />
            <Card />
            <Button />
            <ButtonStyles />
            <Student name="John Doe" age= {30} isStudent ={true} />
            <Student name="Patrick Doe" age= {42} isStudent ={false} />
            <Student />
            <UserGreeting isLoggedIn={false} username ="Kunal Mishra"/>
            <List />
            {fruitsWithCalories.length > 0 ? <ListProps items ={fruitsWithCalories} category="Fruits"/> : null}
            {vegetablesWithCalories.length > 0 ? <ListProps items ={vegetablesWithCalories} category="Vegetables"/> : <p>No vegetables available</p>}
            {dryFruitsWithCalories.length >0 && <ListProps items ={dryFruitsWithCalories} category="Dry Fruits"/>}
            <ButtonNew />
            <ProfilePic />
            <MyComponent />
            <Counter />
            <OnChange />
            <ColourPicker />
            <UpdaterFunction />
            <UpdateObject />
            <UpdateArray />
            <UpdateArrayOfObj />
            <ToDoList />
            <UseEffect />
            <Dimensions />
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default App
