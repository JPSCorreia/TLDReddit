import React from 'react'
import CommentList from './CommentList';

function Topic(props) {
  const thumbnailExists = (thumbnail) => {
    if (!thumbnail || thumbnail !== "default") {
      return <img alt="thumbnail" src={thumbnail}></img>;
    }
  };

  return (
    <div className="topic">
      <h4>{props.topic.title}</h4>
      {thumbnailExists(props.topic.thumbnail)}
      <p>Author: {props.topic.author}</p>
      <p>
        Subreddit:{" "}
        <a
          href={`https://www.reddit.com/r/${props.topic.subreddit}`}
          target="_blank"
          rel="noreferrer"
        >
          r/{props.topic.subreddit}
        </a>
      </p>
      <CommentList url={props.topic.permalink} />
    </div>
  );
}

export default Topic;