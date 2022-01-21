import React, { useCallback, useEffect, useRef, useState } from "react";
import UploadHeader from "./uploadHeader";
import styles from "./upload.module.css";
import SingleImg from "./singleImg";
import MultiImg from "./multiImg";
import { imgsUpload, postUpload } from "../../util/fetcher";
import { getCookie } from "../../util/cookie";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const textRef = useRef();
  const imgRef = useRef();
  const navigate = useNavigate();

  const [imgUrls, setImgUrls] = useState([]);
  const [validPass, setValidPasss] = useState(false);

  const token = getCookie("pic_token");
  const profile = "http://146.56.183.55:5050/" + getCookie("pic_profile");

  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
    checkValid();
  }, []);

  const handleImgUpload = (e) => {
    setImgUrls([]);
    const fileLength = imgRef.current.files.length;
    if (fileLength > 3) {
      alert("이미지는 3개까지 업로드 가능합니다.");
      imgRef.current.value = "";
    } else if (fileLength > 0) {
      const files = Array.from(imgRef.current.files);

      files.forEach((_, idx) => {
        let reader = new FileReader();
        reader.onload = (event) => {
          setImgUrls((imgUrls) => [...imgUrls, event.target.result]);
        };
        reader.readAsDataURL(e.target.files[idx]);
      });
    }
    checkValid();
  };

  const deleteSingleImg = () => {
    setImgUrls([]);
    imgRef.current.value = "";
    checkValid();
  };

  const deleteMultiImg = (idx) => {
    const temp = imgUrls;
    temp.splice(idx, 1);
    setImgUrls(() => [...temp]);
    const dataTranster = new DataTransfer();
    Array.from(imgRef.current.files)
      .filter((_, i) => i !== idx)
      .forEach((file) => {
        // 지우려는 파일을 제외한 배열을 datatranster에 넣어준다.
        dataTranster.items.add(file);
      });
    // fileInput의 파일을 dataTranster.files로 바꿔준다.
    imgRef.current.files = dataTranster.files;
  };

  const checkValid = () => {
    if (imgRef.current.files.length || textRef.current.value) {
      setValidPasss(true);
    } else {
      setValidPasss(false);
    }
  };

  const imgUpload = async () => {
    return imgsUpload(imgRef.current.files).catch((err) => {
      alert("이미지 업로드 에러입니다.");
    });
  };

  const posting = async (data) => {
    await postUpload(data, token)
      .then((res) => {
        if (res.status !== 200) {
          alert("err:", res.status);
          return false;
        } else {
          alert("게시글이 등록되었습니다.");
          return true;
        }
      })
      .then((res) => {
        if (res) {
          navigate("/mypage");
        }
      })
      .catch((err) => {
        alert("포스팅 에러입니다.");
      });
  };

  const handleOnSubmit = () => {
    const data = {
      post: {
        content: textRef.current.value,
        image: "",
      },
    };
    if (imgRef.current.files.length) {
      imgUpload(imgRef.current.files).then((res) => {
        data.post.image = res;
        posting(data);
      });
    } else {
      posting(data);
    }
  };

  return (
    <>
      <UploadHeader validPass={validPass} handleOnSubmit={handleOnSubmit} />
      <main className={styles.main}>
        <div className={styles.profile_wrap}>
          <img className={styles.img_profile} src={profile} alt="profile" />
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
              <SingleImg path={imgUrls[0]} deleteSingleImg={deleteSingleImg} />
            ) : (
              imgUrls.map((item, idx) => {
                return (
                  <MultiImg
                    key={`key-${idx}`}
                    path={item}
                    idx={idx}
                    deleteMultiImg={deleteMultiImg}
                  />
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
            hidden
          />
        </div>
      </main>
    </>
  );
};

export default Upload;
