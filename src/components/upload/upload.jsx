import React, { useCallback, useRef } from "react";
import UploadHeader from "./uploadHeader";
import styles from "./upload.module.css";

const Upload = () => {
  const textRef = useRef();

  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  return (
    <>
      <UploadHeader />
      <main className={styles.main}>
        <div className={styles.profile_wrap}>
          <img
            className={styles.img_profile}
            src="/images/publicImg/basic-profile-img.png"
            alt="profile"
          />
        </div>
        <div>
          <textarea
            ref={textRef}
            className={styles.content_text}
            placeholder="게시글 입력하기.."
            onInput={handleResizeHeight}
          />
          <div className={styles.imgs_wrap}></div>
          <label className={styles.img_upload_btn} htmlFor="img_upload">
            <img
              className={styles.img_upload_btn}
              src="/images/publicImg/upload-file.png"
              alt="사진 업로드 버튼"
            />
          </label>
          <input
            type="file"
            id="img_upload"
            accept="image/*"
            // onchange="setProfile(event)"
            multiple
            hidden
          />
        </div>
      </main>
    </>
  );
};

export default Upload;
