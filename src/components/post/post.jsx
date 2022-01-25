import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCookie } from "../../util/cookie";
import { getPostDetail } from "../../util/fetcher";
import ThreeDotHeader from "../modules/header/threeDotHeader";
import PostCard from "../mypage/postCard";
import Splash from "../splash/splash";
import CommentInputBox from "./commentInputBox";
import CommentSection from "./commentSection";

const Post = () => {
  const { postID } = useParams();
  const token = getCookie("pic_token");
  const myImg = getCookie("pic_profile");
  const [postData, setPostData] = useState();
  const [errFlag, setErrFlag] = useState(true);

  useEffect(() => {
    getPostDetail(postID, token) //
      .then((res) => {
        setPostData(res.data.post);
      })
      .catch(() => setErrFlag(false));
  }, [postID, token]);

  if (!errFlag) return <div>404</div>;
  if (!postData) return <Splash />;

  return (
    <>
      <ThreeDotHeader />
      <main>
        <PostCard
          post={postData}
          handleModal={() => console.log("wait")}
          token={token}
        />
        <CommentSection myImg={myImg} />
        <CommentInputBox myImg={myImg} />
      </main>
    </>
  );
};

export default Post;
