import { useEffect, useState } from "react";
import "./Main.scss";
import Banner from "../components/banner/Banner";
import Post from "../components/post/Post";

function Main() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("/mock/postList.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setPostList(res.data));
  }, [postList]);

  return (
    <>
      <Banner />
      <div style={{ margin: "104px auto" }}>Category Filtering Area</div>
      {postList.map((post) => {
        return <Post key={post.id} data={post} />;
      })}
    </>
  );
}

export default Main;
