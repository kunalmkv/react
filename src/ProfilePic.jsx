

function ProfilePic() {
    const profilePic = "https://www.w3schools.com/howto/img_avatar.png";
    const handleClick = () => { console.log("Profile Pic clicked") }
    const handleClickWithEvent = (e) => { e.target.style.display = "none" }

  return (
    <div>
      <img onClick={handleClick} src={profilePic} alt="Profile Pic" />
      <img onClick={ (e) => handleClickWithEvent(e) }src={profilePic}/>
    </div>
  );
}

export default ProfilePic;