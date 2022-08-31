import "./Main.scss";
import Banner from "../components/banner/Banner";
import PostList from "../components/postList/PostList";

function Main() {
  return (
    <>
      <Banner />
      <div style={{ margin: "104px auto" }}>Category Filtering Area</div>
      <main className="main">
        <PostList />
      </main>
    </>
  );
}

export default Main;
