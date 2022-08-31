import "./UserInfo.scss";

function UserInfo(props) {
  const userProfileImageUri = props.userProfileImageUri;
  const userName = props.userName;

  return (
    <div className="user-info">
      <img className="user-image" src={userProfileImageUri} alt="#!" />
      <span className="user-name">{userName}</span>
    </div>
  );
}

export default UserInfo;
