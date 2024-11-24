import Card from './Card'
import Button from './Button/Button.jsx'
import './ButtonStyles.jsx'
import ButtonStyles from "./ButtonStyles.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {
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

        </div>
    )
}

export default App
