import React from 'react'
import ReactMarkdown from 'react-markdown'
import * as App from '../App'

function Comment(props) {

  console.log(props.commentData)
  return (
    <div className="comment">
      <div className='author-info'>
        <div className='author'>{props.commentData.author}</div>
        <span className='separator'> &nbsp; </span>
        <div className='points'>{props.commentData.ups} points</div>
        <span className='separator'> &nbsp; </span>
        <div className='comment-created-when'>{App.convertUnixToDate(props.commentData.created_utc)}</div>
      </div>
      <div className='comment-body'><ReactMarkdown>{props.commentData.body}</ReactMarkdown></div>
    </div>
  );
}

export default Comment;