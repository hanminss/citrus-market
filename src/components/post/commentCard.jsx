import React from "react";
import { API_END_POINT } from "../../constants";

const CommentCard = ({ comment }) => {
  return (
    <article>
      <div>
        <img src={`${API_END_POINT}/${comment.author.image}`} alt="" />
      </div>
      <div>
        <div>
          <div>
            <h2>{comment.author.username}</h2>
            <p>{comment.createdAt}</p>
          </div>
          <button>
            <img src="/images/publicImg/s-icon-more-vertical.png" alt="" />
          </button>
        </div>
        <p>{comment.content}</p>
      </div>
    </article>
  );
};

export default CommentCard;
