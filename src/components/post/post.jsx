import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCookie } from "../../util/cookie";
import { getPostDetail } from "../../util/fetcher";
import ThreeDotHeader from "../modules/header/threeDotHeader";
import PostCard from "../mypage/postCard";
import Splash from "../splash/splash";

const Post = () => {
  const { postID } = useParams();
  const token = getCookie("pic_token");
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
      <PostCard
        post={postData}
        handleModal={() => console.log("wait")}
        token={token}
      />
    </>
  );
};

export default Post;
