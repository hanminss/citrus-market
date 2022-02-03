import React, { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";

import { getCookie } from "../../util/cookie";
import { searchUser } from "../../util/fetcher";
import Menu from "../modules/menu/menu";
import FeedHeader from "./feedHeader";
import NoneFallow from "./noneFallow";
import SearchBody from "./searchBody";
import SearchHeader from "./searchHeader";

const Feed = () => {
  const [search, setSearch] = useState(false);
  const [userData, setUserData] = useState([]);
  const keyWordRef = useRef("");
  const token = getCookie("pic_token");

  // ref 언마운트 처리 ...
  useEffect(() => {
    if (keyWordRef.current === null) {
      keyWordRef.current = "";
      setUserData([]);
    }
  }, [keyWordRef.current.value]);

  const getSearchUser = () => {
    if (keyWordRef.current.value) {
      searchUser(keyWordRef.current.value, token) //
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => alert(err));
    } else {
      setUserData([]);
    }
  };

  return (
    <>
      {search ? (
        <SearchHeader
          setSearch={setSearch}
          keyWordRef={keyWordRef}
          getSearchUser={getSearchUser}
        />
      ) : (
        <FeedHeader setSearch={setSearch} />
      )}
      <Menu />
      {search ? (
        <SearchBody userData={userData} keyword={keyWordRef.current.value} />
      ) : (
        <NoneFallow setSearch={setSearch} />
      )}
    </>
  );
};

export default Feed;
