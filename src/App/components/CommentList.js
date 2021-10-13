import React from 'react'
import Comment from './Comment';
import CommentHead from './CommentHead';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CommentList(props) {


  // Redux State/Action Management.
  const dispatch = useDispatch();
  const commentList = useSelector(
    (state) => state.commentList[props.url] || []
  );
  useEffect(() => {
    dispatch(RedditAPI.getCommentList(props.url));
  }, [dispatch, props.url]);
  const toggleComments = useSelector((state) => state.toggleComments[props.id] || false)


  // Populate list array with with <Comment /> components using commentList state data.
  const list = [];
  commentList.slice(0, 25).forEach((comment, index) => {
    // Provisorio só 25 comments a mostrar)
    list.push(
      <Comment
        commentData={comment.data}
        key={comment.data.id}
        dataKey={index + 1}
        topicId={props.id}
        colorType={index % 2 === 0 ? "comment-grey" : "comment-white"}
      />
    );
  });

      // Add Thread self text if it has any.
      const selftext = [];
      if (props.selftext) {
        selftext.push(
          <CommentHead
            commentAuthor={props.author}
            points={props.points}
            dataKey="0"
            key="0"
            commentBody={props.selftext}
            created_utc={props.created_utc}
            topicId={props.id}
          />
        );
      }


  return (
    <div className="comment-list">
      <div className="comments" id={`comments-${props.id}`}>
        {toggleComments && props.selftext ? selftext : ""}
        {toggleComments ? list : ""}
        {toggleComments
          ? console.log(`Opening comments from ${props.title}`)
          : ""}
      </div>
    </div>
  );
}

export default CommentList;

