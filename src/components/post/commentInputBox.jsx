import React, { useRef, useState } from "react";
import { API_END_POINT } from "../../constants";
import { getComments, uploadComment } from "../../util/fetcher";
import styles from "./commentInputBox.module.css";

const CommentInputBox = ({
  myImg,
  postID,
  token,
  setCommentData,
  setErrFlag,
}) => {
  const [valid, setValid] = useState(false);
  const contentRef = useRef();

  const handleContentCheck = () => {
    if (contentRef.current.value.length) setValid(true);
    else setValid(false);
  };

  const handleOnSubmit = async () => {
    const body = {
      comment: {
        content: contentRef.current.value,
      },
    };

    await uploadComment(postID, token, body) //
      .then((res) => {
        if (res.data.comment) {
          contentRef.current.value = "";
        }
      })
      .catch(() => alert("server err"));

    refreshComment();
  };

  const refreshComment = () => {
    getComments(postID, token) //
      .then((res) => {
        setCommentData(res.data.comments);
      })
      .catch(() => setErrFlag(false));
  };
  return (
    <section className={styles.commentInputBox}>
      <div className={styles.img_wrap}>
        <img
          className={styles.profileImg}
          src={`${API_END_POINT}/${myImg}`}
          alt=""
        />
      </div>
      <input
        ref={contentRef}
        className={styles.input}
        type="text"
        name=""
        id=""
        placeholder="댓글 입력하기..."
        onInput={handleContentCheck}
      />
      {valid ? (
        <button
          className={`${styles.submitBtn} ${styles.activate}`}
          type="button"
          onClick={handleOnSubmit}
        >
          게시
        </button>
      ) : (
        <button className={styles.submitBtn} type="button" disabled>
          게시
        </button>
      )}
    </section>
  );
};

export default CommentInputBox;
