import React from 'react'
import ReactMarkdown from 'react-markdown'

function Comment(props) {

  // console.log(props.comment.body);
  return (
    <div className="comment">
      <p>{props.comment.author}</p>
      <p><ReactMarkdown>{props.comment.body}</ReactMarkdown></p>
      <p>{props.comment.permalink}</p>
      <br />
    </div>
  );
}

export default Comment;