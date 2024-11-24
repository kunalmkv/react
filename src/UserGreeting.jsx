import PropTypes from "prop-types";

function  UserGreeting(props) {
    // if(props.isLoggedIn) {
    //     return <h2>Welcome Back, {props.username}</h2>
    // }
    // else{
    //     return <h2>Please sign up or login</h2>
    // }

    const welcomeMessage = <h2 className=" welcome-message">Welcome Back, {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please sign up or login</h2>
    return props.isLoggedIn ?welcomeMessage : loginPrompt
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default UserGreeting;