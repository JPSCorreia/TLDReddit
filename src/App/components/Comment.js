import React from 'react'

function Comment(props) {

  return (
    <div className="comment">
      <p>{props.comment.author}</p>
      <p>{props.comment.body}</p>
      <p>{props.comment.permalink}</p>
      <br />
    </div>
  );
}

export default Comment;