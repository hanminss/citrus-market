import React, { useCallback, useRef, useState } from "react";
import UploadHeader from "./uploadHeader";
import styles from "./upload.module.css";

const Upload = () => {
  const textRef = useRef();
  const imgRef = useRef();
  const [imgUrls, setImgUrls] = useState([]);

  const handleImgUpload = (e) => {
    setImgUrls([]);
    const fileLength = imgRef.current.files.length;
    if (fileLength > 3) {
      alert("이미지는 3개까지 업로드 가능합니다.");
      imgRef.current.value = "";
    } else if (fileLength > 0) {
      const files = Array.from(imgRef.current.files);

      files.forEach((file, idx) => {
        let reader = new FileReader();
        reader.onload = (event) => {
          setImgUrls((imgUrls) => [...imgUrls, event.target.result]);
        };
        reader.readAsDataURL(e.target.files[idx]);
      });
    }
  };

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

          <div className={styles.imgs_wrap}>
            {imgUrls.length === 1 ? (
              <div className={styles.img_wrap}>
                <img className={styles.img_single} src={imgUrls[0]} alt="" />
                <img
                  className={styles.btn_x}
                  src="/images/upload/x.svg"
                  // onclick="deleteMultiImg(this)"
                  alt=""
                />
              </div>
            ) : (
              imgUrls.map((item, idx) => {
                return (
                  <div id={idx} className={styles.img_wrap} key={idx}>
                    <img className={styles.img_multi} src={item} alt="" />
                    <img
                      data-index={idx}
                      className={styles.btn_x}
                      src="/images/upload/x.svg"
                      // onclick="deleteMultiImg(this)"
                      alt=""
                    />
                  </div>
                );
              })
            )}
          </div>
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
            ref={imgRef}
            onChange={handleImgUpload}
            multiple
            // hidden
          />
        </div>
      </main>
    </>
  );
};

export default Upload;
