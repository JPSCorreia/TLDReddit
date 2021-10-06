import React from 'react'
import Comment from './Comment';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'



function CommentList(props) {

  // Redux State/Action Management.
  const list = []
  const [toggleComments, setToggleComments] = useState(true);
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.commentList[props.url] || []);
  useEffect(() => {
    dispatch(RedditAPI.getCommentList(props.url)); 
  }, [dispatch, props.url]);

  
  // Event Handler for button to show or hide comments from thread.
  function handleToggleComments () {
        
    const commentsDiv = document.getElementById(`comments-${props.id}`)
    
    if (toggleComments) {
      for (let i = 0; i < 3; i++) {
        commentList.forEach((comment, index) => {
          if(index < 3) {
            list.push(<Comment comment={comment.data} key={comment.data.id} />)
            console.log(comment)
          }
        })
        setToggleComments(false)
      }
      commentsDiv.innerHTML = list;
    } else {
      commentsDiv.innerHTML = '';
      //list.splice(0, list.length);
      //list.length = 0;
      setToggleComments(true)
    }
  }

  // commentList.forEach((comment, index) => {
  //   if(index < 3) list.push(<Comment comment={comment.data} key={comment.data.id} />)
  // })



  return (
    <div>
      <button type="button" className='show-or-hide-comments' onClick={handleToggleComments}>Comments</button>
      {/* <p>{`teste ${commentList.isShowingComments}`}</p> */}
      <div className='comments' id={`comments-${props.id}`}>
        {}
      </div>
      
      
    </div>);
}

export default CommentList;



// const list = [];

// export function toggleShowComments () {

//   if (!list) {
//     commentList.forEach((comment, index) => {
//       if(index < 3) list.push(<Comment comment={comment.data} key={comment.data.id} />)
//     })
//   } else {
//     list.length = 0;
//   }
// }