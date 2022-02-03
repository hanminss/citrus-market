import React from "react";
import styles from "./searchHeader.module.css";

const SearchHeader = ({ setSearch, keyWordRef }) => {
  return (
    <header className={styles.header}>
      <article className={styles.feed_search_container}>
        <img
          className={styles.backBtn}
          src="/images/publicImg/icon-arrow-left.png"
          alt="뒤로가기"
          onClick={() => setSearch(false)}
        />
        <input
          ref={keyWordRef}
          className={styles.searchInput}
          type="text"
          placeholder="계정 검색"
        />
      </article>
    </header>
  );
};
export default SearchHeader;
