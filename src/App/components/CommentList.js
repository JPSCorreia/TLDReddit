import React from 'react'
import Comment from './Comment';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function CommentList(props) {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.commentList[props.url] || []);
  
  useEffect(() => {
    dispatch(RedditAPI.getCommentList(props.url)); 
  }, [dispatch, props.url]);


  const list = [];
 

  commentList.slice(0, 3).forEach((comment, index) => {
    // Only push 10 comments to the list
    // Provisorio só 3 comments a mostrar
    // console.log(comment.data.body)
    // console.log(' ')
    list.push(<Comment comment={comment.data} key={comment.data.id} />);
 
  });

  
  return (
    <div>
      {list}
    </div>);
}

export default CommentList;








  // let overTenComments = false;
  // commentList.forEach((comment) => {
  //   // Only push 10 comments to the list
  //   if (overTenComments) {
  //     return;
  //   }
  //   if (list.length >= 10) {
  //     overTenComments = true;
  //     return;
  //   }

  //   list.push(<Comment comment={comment.data} key={comment.data.id} />);
  // });