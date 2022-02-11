import React from "react";
import CardCSS from "./Card.module.css";
import Tags from "./../Tags";
interface Props {
  posts: any;
  loading: boolean;
}

const Card: React.FC<Props> = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className={CardCSS.container}>
        <div className={CardCSS.row}>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }
  return (
    <div className={CardCSS.container}>
      <div className={CardCSS.row}>
        {posts.map((post: any) => (
          <div className={CardCSS.card} key={post.id}>
            <div className={CardCSS.delete} >
              {/* TODO: Implement delete functionality on next iteration */}
            </div>
            <div className={CardCSS.title}>{post.id}</div>
            <div className={CardCSS.content}>
              <p>{post.street}</p>
              <p>{`${post.city}, ${post.state} - ${post.country}`}</p>
            </div>
            <div className={CardCSS.cardFooter}>
              <Tags content={post} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
