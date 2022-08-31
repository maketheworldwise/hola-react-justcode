import "./Post.scss";

import speechBubble from "../../assets/svg/speech-bubble.svg";
import UserInfo from "../userInfo/UserInfo";

function Post(props) {
  const post = props.data;

  return (
    <div className="post-container">
      <div className="post-content">
        <div className="post-start-date">시작 예정일 | {post.startAt}</div>
        {/* TODO: 중간점으로 변환 필요 */}
        <div className="post-title">{post.title}</div>
        <div className="post-hashtag">
          {post.recruitmentCategory && <span>{`#${post.recruitmentCategory}`}</span>}
          {post.process && <span>{`#${post.process}`}</span>}
          {post.recruitmentNumber && <span>{`#${post.recruitmentNumber}`}</span>}
          {post.expectedDuration && <span>{`#${post.expectedDuration}`}</span>}
        </div>
        <div className="post-tech-specs">
          {post.techSpecs &&
            post.techSpecs.map((tech) => {
              return <img key={tech.id} src={tech.langIcon} alt="#!" />;
            })}
        </div>
        <div className="post-etc">
          <UserInfo userProfileImageUri={post.userProfileImageUri} userName={post.userName} />
          <div className="post-info">
            <img className="speech-bubble-image" src={speechBubble} alt="#!" />
            <span className="post-comment-number">{post.numberOfComments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
