import React from 'react'
import Comment from './Comment';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'


function CommentList(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.commentList[props.url] || []);
  useEffect(() => {
    dispatch(RedditAPI.getCommentList(props.url));
  }, [dispatch, props.url]);
  

  // Populate list array with with <Comment /> components using commentList state data.
  const list = []
  commentList.slice(0, 25).forEach((comment, index) => {
    // Provisorio só 3 comments a mostrar)
    list.push(<Comment commentData={comment.data} key={comment.data.id} dataKey={index} />);
  });


  // Event handler for toggling comments button and changing color of button.
  const [toggleComments, setToggleComments] = useState(false);
  function handleToggleComments () {
    setToggleComments(!toggleComments)
    if (!toggleComments) {
      document.getElementById(`show-or-hide-comments-${props.id}`).style.color = 'blue'
    } else {
      document.getElementById(`show-or-hide-comments-${props.id}`).style.color = 'black'
    }
  }


  return (
    <div className='comment-list'>
      <div className='topic-info'>
        <p><b>Submitted:</b> {props.created} by <b>{props.author}</b> on <a
          href={`https://www.reddit.com/r/${props.subName}`}
          target="_blank"
          rel="noreferrer"
        >
          r/{props.subName}
        </a></p>
        <button type='button' id={`show-or-hide-comments-${props.id}`} className='show-or-hide-comments' onClick={handleToggleComments}>{props.numComments} Comments</button>
      </div>
      <div className='comments' id={`comments-${props.id}`}>
        {toggleComments? list : ''}
      </div>
    </div>
  );

}

export default CommentList;