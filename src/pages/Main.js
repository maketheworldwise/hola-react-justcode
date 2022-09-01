import "./Main.scss";
import Banner from "../components/banner/Banner";
import PostList from "../components/postList/PostList";
import TechCategory from "../components/techCategory/TechCategory";

function Main() {
  return (
    <>
      <Banner />
      <TechCategory />
      <main className="main">
        <PostList />
      </main>
    </>
  );
}

export default Main;
