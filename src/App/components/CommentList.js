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
  

  // Populate list array with with <Comment /> components using commentList state data.
  const list = [];
  commentList.slice(0, 25).forEach((comment, index) => {
    // Provisorio só 25 comments a mostrar)
    list.push(
      <Comment
        commentData={comment.data}
        key={comment.data.id}
        dataKey={index}
        topicId={`${props.subreddit}-${props.dataKey}`}
      />
    );
  });

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

