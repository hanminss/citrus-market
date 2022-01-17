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
  const result = await axios(createGetConfig("/user"));
  const idArr = result.data.map((item) => item.accountname);
  if (idArr.indexOf(accountName) === -1) return true;
  else return false;
};
