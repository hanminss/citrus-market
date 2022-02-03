import React, { useRef, useState } from "react";
import Menu from "../modules/menu/menu";
import FeedHeader from "./feedHeader";
import NoneFallow from "./noneFallow";
import SearchHeader from "./searchHeader";

const Feed = () => {
  const [search, setSearch] = useState(false);
  const keyWordRef = useRef();

  return (
    <>
      {search ? (
        <SearchHeader setSearch={setSearch} keyWordRef={keyWordRef} />
      ) : (
        <FeedHeader setSearch={setSearch} />
      )}
      <Menu />
      <NoneFallow setSearch={setSearch} />
    </>
  );
};

export default Feed;
