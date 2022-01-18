import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./feedHeader.module.css";
const FeedHeader = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <article className={styles.feed_search_container}>
        <p className={styles.search_bar}>계정 검색</p>
        <button
          onClick={() => navigate("/search")}
          className={styles.search_btn}
          type="button"
        />
      </article>
    </header>
  );
};

export default FeedHeader;
