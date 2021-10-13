import React from 'react'
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";


function Comment(props) {

  return (
    <div
      className={`comment`}
      id={`comment-${props.topicId}-${props.dataKey}`}
    >
      <div className="author-info">
        <div className="author">{props.commentData.author}</div>
        <span className="separator"> &nbsp; </span>
        <div className="points">{props.commentData.ups} points</div>
        <span className="separator"> &nbsp; </span>
        <div className="comment-created-when">
          <Moment unix fromNow>
            {props.commentData.created_utc}
          </Moment>
        </div>
      </div>
      <div className="comment-body">
        <ReactMarkdown>{props.commentData.body}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Comment;