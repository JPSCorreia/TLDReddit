import React from 'react'
import Comment from './Comment';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function CommentList() {

  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.commentList.value)

   useEffect(() =>  {
    dispatch(RedditAPI.getCommentList())
  },[dispatch]);

  const list = [];
  commentList.forEach((comment) => {
    list.push(<Comment comment={comment.data} />);
  });

   return (
    <div>
      {list}
    </div>
  )

}

export default CommentList;
