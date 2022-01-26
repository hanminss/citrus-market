import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCookie } from "../../util/cookie";
import { getComments, getPostDetail } from "../../util/fetcher";
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
  const [commentData, setCommentData] = useState();
  const [errFlag, setErrFlag] = useState(true);

  const hendleGetComments = () => {
    getComments(postID, token) //
      .then((res) => {
        setCommentData(res.data.comments);
      })
      .catch(() => setErrFlag(false));
  };

  useEffect(() => {
    getPostDetail(postID, token) //
      .then((res) => {
        setPostData(res.data.post);
      })
      .catch(() => setErrFlag(false));
  }, [postID, token]);

  useEffect(() => {
    hendleGetComments();
  }, []);

  if (!errFlag) return <div>404</div>;
  if (!postData || !commentData) return <Splash />;

  return (
    <>
      <ThreeDotHeader />
      <main>
        <PostCard
          post={postData}
          handleModal={() => console.log("wait")}
          token={token}
        />
        <CommentSection
          commentData={commentData}
          postID={postID}
          token={token}
          hendleGetComments={hendleGetComments}
        />
        <CommentInputBox
          myImg={myImg}
          postID={postID}
          token={token}
          setCommentData={setCommentData}
          setErrFlag={setErrFlag}
          hendleGetComments={hendleGetComments}
        />
      </main>
    </>
  );
};

export default Post;
