
function ProfilePicture() {
    
    const imageUrl = './src/assets/profile.jpeg';

    const clickHandler = (e) => e.target.style.display = "none";
    

    return(<img onClick={(e)=>clickHandler(e)} src={imageUrl} alt="ProfilePicture"></img>)
}

export default ProfilePicture