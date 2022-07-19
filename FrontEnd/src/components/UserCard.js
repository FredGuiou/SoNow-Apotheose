import React from "react";
import "../styles/userCard.scss";
import { useParams } from "react-router";

function UserCard() {

  let { id } = useParams();
  const [userImage, setUserImage] = React.useState();
  React.useEffect(() => {
    if (id === "Romain-Portanguen") {

      setUserImage("https://avatars.githubusercontent.com/u/99121248");
    } else {
      //random profilPhoto
      setUserImage("https://picsum.photos/200");
    }
  }, [id]);

  return (
    <div className="user-profile">
    <header className="profileHeaderRow">
      <div className="profilePhotoCol">
        <img src={userImage} alt="profile" />
      </div>
      <div className="profileContentCol">
        <div className="title">
          <div className="username">
            <span>{id}</span>
          </div>
          <div className="editProfile">
            <span>Edit Profile</span>
          </div>
          <div className="settings">
          </div>
        </div>
        <div className="counter">
          <div>
            <span> 263 </span>
            Events
          </div>
          <div>
            <span> 1235 </span>
            Followers
          </div>
          <div>
            <span> 146 </span>
            Following
          </div>
        </div>
        <div className="biographyRow">
          <div className="displayName">
            <span>{id}</span>
          </div>
          <div className="biography">
            <span>Set your bio just here !</span>
          </div>
        </div>
      </div>
    </header>
    <div className="profileTabs">
      <div className="tabItem active">
        <span>Events</span>
      </div>
      <div className="tabItem">
        <span>Friends</span>
      </div>
      <div className="tabItem">
        <span>Saved</span>
      </div>
      <div className="tabItem">
        <span>Tagged</span>
      </div>
    </div>
  </div>
  );
}

export default UserCard;