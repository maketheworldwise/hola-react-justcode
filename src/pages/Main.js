import "./Main.scss";
import UserInfo from "../components/userInfo/UserInfo";
import Banner from "../components/banner/Banner";

function Main() {
  return (
    <>
      <Banner />
      <UserInfo userProfileImageUri={"https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG"} userName={"Test"} />
    </>
  );
}

export default Main;
