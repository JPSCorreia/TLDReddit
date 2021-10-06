import React from 'react'
import CommentList from './CommentList';
import ReactHtmlParser from 'react-html-parser';

function Topic(props) {

  const thumbnailExists = (thumbnail) => {
    if (!["default", "self"].includes(thumbnail)) {
      return <img alt="thumbnail" title={thumbnail} src={thumbnail}></img>;
    }
  };

  return (
    <div 
      className="topic" 
      topic-id={props.topicData.id} 
      id={`${props.subreddit}-${props.dataKey}`}
    >
      <h4>{ReactHtmlParser(props.topicData.title)}</h4>
      {thumbnailExists(props.topicData.thumbnail)}
      <p>Author: {props.topicData.author}</p>
      <p>
        Subreddit:{" "}
        <a
          href={`https://www.reddit.com/r/${props.topicData.subreddit}`}
          target="_blank"
          rel="noreferrer"
        >
          r/{props.topicData.subreddit}
        </a>
      </p>
      <CommentList 
        url={props.topicData.permalink} 
        dataKey={props.dataKey} 
        subreddit={props.subreddit} 
        id={`${props.subreddit}-${props.dataKey}`}
      />
    </div>
  );
}

export default Topic;


