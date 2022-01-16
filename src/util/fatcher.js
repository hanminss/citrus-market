import axios from "axios";
import { API_END_POINT } from "../constants";

const createConfig = (method, url, data) => {
  return {
    method: method,
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

  const result = await axios(createConfig("post", url, data));
  console.log();
  if (result.data.message === "사용 가능한 이메일 입니다.") return true;
  else if (result.data.message === "잘못된 접근입니다.") return null;
  else return false;
};

// export const postFetcher = (url, obj) => {
//   const data = JSON.stringify(obj);
//   const config = {
//     method: "post",
//     url,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data,
//   };

//   return axios(config).then((res) => res.data);
// };
