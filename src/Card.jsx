import profilePic from './assets/profilePic.jpg'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title"> Bro code</h2>
            <p className="card-text">Bro code is a set of rules that every bro should follow</p>
        </div>
    )
}

export default Card;