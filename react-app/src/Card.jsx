function Card(){
  
    const profilePicture = "https://via.placeholder.com/150";
   
    return(
        <div className="card">
            <img className="card-image" src={profilePicture} alt="profile picture"></img>
            <h2>Dev Jas</h2>
            <p>I build sites for a living</p>
        </div>
    );
}


export default Card;