import React from 'react'
//import Markdown from "markdown-to-jsx";
import ReactMarkdown from 'react-markdown'
import Moment from "react-moment";


function Comment(props) {

  const commentDepth = {
    width: `${100 - props.depth*1}%`
  };


  return (
    <div
      className={`comment`}
      id={`comment-${props.topicId}-${props.idIndex}`}
      comment-depth={props.depth}
      style={commentDepth}
    >
      <div className="author-info">
        <div 
          className={`author ${(props.topicAuthor === props.commentData.author)? 'author-darkblue': ''}`}
        >
          {props.commentData.author}
        </div>
        <span className="separator"> &nbsp; </span>
        <div className="points">{props.commentData.ups} points</div>
        <span className="separator"> &nbsp; </span>
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
      {/* {
      (props.commentData.replies)? 
        <Comment />
      
        : 
          ''
      } */}
    </div>
  );
}

export default Comment;



