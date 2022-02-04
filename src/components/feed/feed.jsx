import React, { useRef, useState, useEffect } from "react";
import { getCookie } from "../../util/cookie";
import { getFollowerPost, searchUser } from "../../util/fetcher";
import Menu from "../modules/menu/menu";
import FeedHeader from "./feedHeader";
import HaveFollow from "./haveFollow";
import NoneFallow from "./noneFallow";
import SearchBody from "./searchBody";
import SearchHeader from "./searchHeader";

const Feed = () => {
  const [feedPost, setFeedPost] = useState([]);
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

  useEffect(() => {
    getFollowerPost(token) //
      .then((res) => setFeedPost(res.data.posts))
      .catch((err) => alert(err));
  }, []);

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
      ) : feedPost.length ? (
        <HaveFollow feedPost={feedPost} token={token} />
      ) : (
        <NoneFallow setSearch={setSearch} />
      )}
    </>
  );
};

export default Feed;
