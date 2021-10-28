import React from 'react'
//import Markdown from "markdown-to-jsx";
import ReactMarkdown from 'react-markdown'
import Moment from "react-moment";


function Comment(props) {

  const commentDepth = {
    // width: `${99.5 - props.depth*1.25}%`
    backgroundColor: `${(props.depth%2 === 0)? 'rgb(255, 255, 255)' : 'rgb(247, 247, 248)'}`
  };



const list = [];
if (props.commentData.replies) {

  const replyList = props.commentData.replies.data.children

  replyList.forEach((comment, index) => { 
    if (comment.data.body) { // fix for some empty comments that were appearing, probably hidden comments (downvoted).
      list.push(
        <Comment
          commentData={comment.data}
          key={comment.data.id}
          dataKey={`${props.dataKey}-${index}`}
          topicId={props.topicId}
          depth={props.depth+1}
          idIndex={`${props.idIndex}-${index}`}
          topicAuthor={props.topicAuthor}
        />
      );
    }
  });
}



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
      { list }
    </div>
  );
}

export default Comment;



