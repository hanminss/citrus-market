import axios from "axios";
import { API_END_POINT } from "../constants";

const createGetConfig = (url) => {
  return {
    method: "get",
    url: API_END_POINT + url,
    headers: {},
  };
};

const createPostConfig = (url, data) => {
  return {
    method: "post",
    url: API_END_POINT + url,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
};

const createPostConfigWithToken = (url, data, token) => {
  return {
    method: "post",
    url: API_END_POINT + url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: data ? data : "",
  };
};

const createPostConfigWithTokenNoneData = (url, token) => {
  return {
    method: "post",
    url: API_END_POINT + url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
};

const createGetConfigWithToken = (url, data, token) => {
  return {
    method: "get",
    url: API_END_POINT + url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: data,
  };
};

const createGetConfigWithTokenNoneData = (url, token) => {
  return {
    method: "get",
    url: API_END_POINT + url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
};

const createDeleteConfigWithToken = (url, token) => {
  return {
    method: "delete",
    url: API_END_POINT + url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
};

const createPutConfigWithToken = (url, data, token) => {
  return {
    method: "put",
    url: API_END_POINT + url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data,
  };
};

export const checkEmail = async (url, email) => {
  const data = {
    user: {
      email,
    },
  };

  const result = await axios(createPostConfig(url, data));

  if (result.data.message === "사용 가능한 이메일 입니다.") return true;
  else if (result.data.message === "잘못된 접근입니다.") return null;
  else return false;
};

export const checkIdDuplication = async (accountName) => {
  const body = {
    user: {
      accountname: accountName,
    },
  };
  const result = await axios(createPostConfig("/user/accountnamevalid", body));
  if (result.data.message === "사용 가능한 계정ID 입니다.") return true;
  else return false;
};

export const profileUpload = async (files) => {
  const data = new FormData();
  data.append("image", files[0], files[0].name);

  const result = await axios(createPostConfig("/image/uploadfile", data));
  return result;
};

export const imgsUpload = async (files) => {
  const data = new FormData();

  for (let i = 0; i < files.length; i++) {
    data.append("image", files[i], files[i].name);
  }

  return await axios(createPostConfig("/image/uploadfiles", data)).then((res) =>
    res.data.map((item) => item.filename).join()
  );
};

export const join = async (body) => {
  const result = await axios(createPostConfig("/user", body));

  return result;
};

export const login = async (body) => {
  const result = await axios(createPostConfig("/user/login", body));

  return result.data;
};

export const postUpload = async (body, token) => {
  const result = await axios(createPostConfigWithToken("/post", body, token));
  return result;
};

export const getMyInfo = async (accountName, token) => {
  const result = await axios(
    createGetConfigWithTokenNoneData(`/profile/${accountName}`, token)
  );
  return result;
};

export const getMyPosts = async (accountName, token) => {
  const result = await axios(
    createGetConfigWithTokenNoneData(`/post/${accountName}/userpost`, token)
  );
  return result;
};

export const deletePost = async (id, token) => {
  const result = await axios(createDeleteConfigWithToken(`/post/${id}`, token));
  return result;
};

export const putProfile = async (body, token) => {
  const result = await axios(createPutConfigWithToken(`/user`, body, token));
  return result;
};

export const addProduct = async (body, token) => {
  const result = await axios(
    createPostConfigWithToken("/product", body, token)
  );

  return result;
};

export const getProducts = async (accountName, token) => {
  const result = await axios(
    createGetConfigWithTokenNoneData(`/product/${accountName}`, token)
  );

  return result;
};

export const heartPost = async (postID, token) => {
  const result = await axios(
    createPostConfigWithTokenNoneData(`/post/${postID}/heart`, token)
  );
  return result;
};

export const unHeartPost = async (postID, token) => {
  const result = await axios(
    createDeleteConfigWithToken(`/post/${postID}/unheart`, token)
  );
  return result;
};

export const getPostDetail = async (postID, token) => {
  const result = await axios(
    createGetConfigWithTokenNoneData(`/post/${postID}`, token)
  );
  return result;
};

export const uploadComment = async (postID, token, body) => {
  const result = await axios(
    createPostConfigWithToken(`/post/${postID}/comments`, body, token)
  );
  return result;
};

export const getComments = async (postID, token) => {
  const result = await axios(
    createGetConfigWithTokenNoneData(`/post/${postID}/comments`, token)
  );
  return result;
};

export const deleteComment = async (postID, commentID, token) => {
  const result = await axios(
    createDeleteConfigWithToken(`/post/${postID}/comments/${commentID}`, token)
  );
  return result;
};

export const reportComment = async (postID, commentID, token) => {
  const result = await axios(
    createPostConfigWithTokenNoneData(
      `/post/${postID}/comments/${commentID}/report`,
      token
    )
  );
  return result;
};

export const searchUser = async (keyWord, token) => {
  const result = await axios(
    createGetConfigWithTokenNoneData(
      `/user/searchuser/?keyword=${keyWord}`,
      token
    )
  );
  return result;
};

export const followUser = async (accountName, token) => {
  const result = await axios(
    createPostConfigWithTokenNoneData(`/profile/${accountName}/follow`, token)
  );
  return result;
};

export const unFollowUser = async (accountName, token) => {
  const result = await axios(
    createDeleteConfigWithToken(`/profile/${accountName}/unfollow`, token)
  );
  return result;
};

export const getFollowerPost = async (token) => {
  const result = await axios(
    createGetConfigWithTokenNoneData(`/post/feed`, token)
  );
  return result;
};

export const reportPost = async (token, postID) => {
  const body = {
    report: {
      post: postID,
    },
  };

  const result = axios(
    createPostConfigWithToken(`/post/${postID}/report`, body, token)
  );

  return result;
};
