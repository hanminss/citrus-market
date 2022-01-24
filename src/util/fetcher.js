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

const createGetConfigWithToken = (url, data, token) => {
  return {
    method: "get",
    url: API_END_POINT + url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: data ? data : "",
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
    createGetConfigWithToken(`/profile/${accountName}`, false, token)
  );
  return result;
};

export const getMyPosts = async (accountName, token) => {
  const result = await axios(
    createGetConfigWithToken(`/post/${accountName}/userpost`, false, token)
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
    createGetConfigWithToken(`/product/${accountName}`, "", token)
  );

  return result;
};
