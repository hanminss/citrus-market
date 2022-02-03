import React from "react";
import UserCard from "./userCard";
import styles from "./searchBody.module.css";
import { Link } from "react-router-dom";

const SearchBody = ({ userData, keyword }) => {
  return (
    <main className={styles.searchContainer}>
      {userData.map((item, idx) => {
        return (
          <Link
            className={styles.link}
            to={`/otherPage/${item.accountname}`}
            key={`user-card-key-${idx}`}
          >
            <UserCard user={item} keyword={keyword} />
          </Link>
        );
      })}
    </main>
  );
};

export default SearchBody;
