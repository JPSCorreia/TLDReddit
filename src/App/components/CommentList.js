import React from 'react'
import Comment from './Comment';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function CommentList(props) {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.commentList.value);

  useEffect(() => {
    dispatch(RedditAPI.getCommentList(props.url));
  }, [props.url]);

  const list = [];
  let overTenComments = false;
  commentList.forEach((comment) => {
    // Only push 10 comments to the list
    if (overTenComments) {
      return;
    }
    if (list.length >= 10) {
      overTenComments = true;
      return;
    }

    list.push(<Comment comment={comment.data} key={comment.data.id} />);
  });

  return <div>{list}</div>;
}

export default CommentList;
