import React, { useState } from "react";
import Menu from "../modules/menu/menu";
import FeedHeader from "./feedHeader";
import NoneFallow from "./noneFallow";
import SearchHeader from "./searchHeader";

const Feed = () => {
  const [search, setSearch] = useState(false);

  return (
    <>
      {search ? (
        <SearchHeader setSearch={setSearch} />
      ) : (
        <FeedHeader setSearch={setSearch} />
      )}
      <Menu />
      <NoneFallow setSearch={setSearch} />
    </>
  );
};

export default Feed;
