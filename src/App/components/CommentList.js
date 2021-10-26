import React from 'react'
import Comment from './Comment';
import CommentHead from './CommentHead';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function CommentList(props) {

  // Redux State/Action Management.
  const thisCommentListId = `${props.subreddit}-${props.dataKey}`;
  const dispatch = useDispatch();
  const commentList = useSelector(
    (state) => state.commentList[props.topicData.permalink] || []
  );
  useEffect(() => {
    dispatch(RedditAPI.getCommentList(props.topicData.permalink));
  }, [dispatch, props.topicData.permalink]);
  const toggleComments = useSelector((state) => state.toggleComments[thisCommentListId] || false)

  //todo: Change comment display logic so reply comments are rendered inside the Comment component.
  // Populate list array with with <Comment /> components using commentList state data.
  let idIndex = 0;
  const list = [];
  commentList.forEach((comment, index) => { // tier 1 replies
    if (comment.data.body) { // fix for some empty comments that were appearing, probably hidden comments (downvoted).
      list.push(
        <Comment
          commentData={comment.data}
          key={comment.data.id}
          dataKey={index}
          topicId={`${props.subreddit}-${props.dataKey}`}
          depth={0}
          idIndex={idIndex}
        />
      );
    idIndex++;
    // If there are any replies then call function to show replies.
    if (comment.data.replies) showReplies(comment, 1, idIndex)
    }
  });


  // Show replies and if those comments have replies then call this function again.
  function showReplies (commentParameter, depth) {
  
      commentParameter.data.replies.data.children.forEach((comment, index) => {
        if (comment.data.body) {
          list.push(
            <Comment
              commentData={comment.data}
              topicAuthor={props.topicData.author}
              key={comment.data.id}
              dataKey={index}
              topicId={`${props.subreddit}-${props.dataKey}`}
              depth={comment.data.depth}
              idIndex={idIndex}
            />
          );
          idIndex++; 
          if (comment.data.replies) {
            showReplies(comment, depth)
          }        
        }
      })
      
  }


  // Add Thread self text if it has any.
  const selftext = [];
  if (props.topicData.selftext) {
    selftext.push(
      <CommentHead
        topicData={props.topicData}
        subreddit={props.subreddit}
        dataKey="0"
        key="0"
        topicId={`${props.subreddit}-${props.dataKey}`}
      />
    );
  }

  return (
    <div className="comment-list">
      <div className="comments comment-list" id={`comments-${thisCommentListId}`}>
        {toggleComments && props.topicData.selftext ? selftext : ""}
        {toggleComments ? list : ""}
        {toggleComments
          ? console.log(`Opening comments from ${props.title}`)
          : ""}
      </div>
    </div>
  );
}

export default CommentList;

