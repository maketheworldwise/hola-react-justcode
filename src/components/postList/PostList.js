import { useState, useEffect, useCallback } from "react";
import "./PostList.scss";

import Post from "../post/Post";
import Stack from "../../assets/svg/stack.svg";
import Folder from "../../assets/svg/folder.svg";
import Pencil from "../../assets/svg/pencil.svg";
import Switch from "react-js-switch";
import { useInView } from "react-intersection-observer";

const OPT_ALL = "";
const OPT_PROJECT = "프로젝트";
const OPT_STUDY = "스터디";

function PostList() {
  const [postListOpt, setPostListOpt] = useState(0);
  const [postListReadOpt, setPostListReadOpt] = useState(true);
  const [postList, setPostList] = useState([]);

  // const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getPostList = useCallback(async () => {
    setLoading(true);
    await fetch(`/mock/postList${page}.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setPostList((prev) => [...prev, ...res.data]);
      });
    setLoading(false);
  }, [page]);

  useEffect(() => {
    getPostList();
  }, [getPostList]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [inView, loading]);

  const handlePostListOpt = (opt) => {
    setPostListOpt(opt);
  };

  const handlePostListReadOpt = () => {
    setPostListReadOpt(!postListReadOpt);
  };

  return (
    <>
      <div className="post-list-menu">
        <div className="menu-1">
          <div className="menu-item" style={postListOpt === 0 ? { opacity: "100%" } : { opacity: "40%" }} onClick={() => handlePostListOpt(0)}>
            <img className="menu-item-image" src={Stack} alt="#!" />
            <span className="menu-item-text">전체</span>
          </div>
          <div className="menu-item" style={postListOpt === 1 ? { opacity: "100%" } : { opacity: "40%" }} onClick={() => handlePostListOpt(1)}>
            <img className="menu-item-image" src={Folder} alt="#!" />
            <span className="menu-item-text">프로젝트</span>
          </div>
          <div className="menu-item" style={postListOpt === 2 ? { opacity: "100%" } : { opacity: "40%" }} onClick={() => handlePostListOpt(2)}>
            <img className="menu-item-image" src={Pencil} alt="#!" />
            <span className="menu-item-text">스터디</span>
          </div>
        </div>
        <div className="menu-2">
          <span className="menu-item-text">모집 중만 보기</span>
          <Switch
            value={postListReadOpt}
            onChange={handlePostListReadOpt}
            size={50}
            color="#ffffff"
            backgroundColor={{ on: "#ffcd00", off: "#c1cbd8" }}
            borderColor={{ on: "#ffcd00", off: "#c1cbd8" }}
          />
        </div>
      </div>
      <div className="post-list">
        {console.log(postList)}
        {postList &&
          postList.map((post) => {
            let condition = "";
            if (postListOpt === 0) condition = OPT_ALL;
            if (postListOpt === 1) condition = OPT_PROJECT;
            if (postListOpt === 2) condition = OPT_STUDY;
            // TODO: 카드만 안보이도록 구성했지만, 실제론 마감 카드로 화면에 렌더링 필요
            return postListReadOpt
              ? !post.isClosed && post.recruitmentCategory.includes(condition) && <Post key={post.id} data={post} />
              : post.recruitmentCategory.includes(condition) && <Post key={post.id} data={post} />;
          })}
        <div ref={ref}></div>
      </div>
    </>
  );
}

export default PostList;
