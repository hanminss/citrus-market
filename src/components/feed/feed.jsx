import React, { useState } from "react";
import Menu from "../modules/menu/menu";
import styles from "./feed.module.css";
import FeedHeader from "./feedHeader";
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
      <main className={styles.main}>
        <section className={styles.section_feed_new_user}>
          <h2 className={styles.feed_title}>유저를 검색해 팔로우 해보세요!</h2>
          <button
            onClick={() => setSearch(true)}
            className={styles.btn_search_feed}
          >
            검색하기
          </button>
        </section>
      </main>
    </>
  );
};

export default Feed;
