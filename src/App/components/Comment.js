import React from 'react'
//import Markdown from "markdown-to-jsx";
import ReactMarkdown from 'react-markdown'
import Moment from "react-moment";


function Comment(props) {

  const commentDepth = {
    width: `${100 - props.depth*1.25}%`
  };


  return (
    <div
      className={`comment`}
      id={`comment-${props.topicId}-${props.idIndex}`}
      comment-depth={props.depth}
      style={commentDepth}
    >
      <div className="author-info">
        {/* Show Comment number */}
        {/* <div className="comment-number">
          #{props.idIndex+1}
        </div> */}
        <div 
          className={`author ${(props.topicAuthor === props.commentData.author)? 'author-darkblue': ''}`}
        >
          {props.commentData.author}
        </div>
        <div className="points">{props.commentData.ups} points</div>
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



