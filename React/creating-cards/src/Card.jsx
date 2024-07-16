import profilePic from './assets/profile.jpeg'

function Card(){
    return(
        <div className="card">
            <img  className = "card-image" src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Abhi</h2>
            <p className='card-text'>I am a Student who lifts</p>
        </div> 
    );
}

export default Card