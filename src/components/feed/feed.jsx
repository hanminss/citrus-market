import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../modules/menu/menu";
import styles from "./feed.module.css";
import FeedHeader from "./feedHeader";

const Feed = () => {
  const navigate = useNavigate();
  return (
    <>
      <FeedHeader />
      <Menu />
      <main>
        <section className={styles.section_feed_new_user}>
          <h2 className={styles.feed_title}>유저를 검색해 팔로우 해보세요!</h2>
          <button
            onClick={() => navigate("/search")}
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
