import React from "react";
import UploadHeader from "./uploadHeader";

const Upload = () => {
  return (
    <>
      <UploadHeader />
      <main className="content_wrap">
        <div className="profile_wrap">
          <img
            id="profileImg"
            className="img_profile"
            src="/images/publicImg/basic-profile-img.png"
            alt="profile"
          />
        </div>
        <div>
          <textarea
            className="content_text"
            name="content"
            id="content"
            // onkeydown="resize(this)"
            // onkeyup="resize(this)"
            placeholder="게시글 입력하기.."
          />
          <div className="imgs_wrap"></div>
          <label className="img_upload_btn" htmlFor="img_upload">
            <img
              className="img_upload_btn"
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
