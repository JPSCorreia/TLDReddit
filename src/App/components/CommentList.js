import React from 'react'
import Comment from './Comment';
import CommentHead from './CommentHead';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import Moment from "react-moment";

function CommentList(props) {
  // Redux State/Action Management.
  const dispatch = useDispatch();
  const commentList = useSelector(
    (state) => state.commentList[props.url] || []
  );
  useEffect(() => {
    dispatch(RedditAPI.getCommentList(props.url));
  }, [dispatch, props.url]);

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

  // Event handler for toggling comments button and changing color of button.
  const [toggleComments, setToggleComments] = useState(false);
  function handleToggleComments() {
    setToggleComments(!toggleComments);
    if (!toggleComments) {
      document.getElementById(`show-or-hide-comments-${props.id}`).style.color =
        "blue";
    } else {
      document.getElementById(`show-or-hide-comments-${props.id}`).style.color =
        "black";
    }
  }

  return (
    <div className="comment-list">
      <div className="topic-info">
        <p>
          <b>Submitted:</b>{" "}
          <Moment unix fromNow>
            {props.created_utc}
          </Moment>{" "}
          by <span className="author-head">{props.author}</span> to{" "}
          <a
            href={`https://www.reddit.com/r/${props.subName}`}
            target="_blank"
            rel="noreferrer"
          >
            r/{props.subName}
          </a>
        </p>
        <button
          type="button"
          id={`show-or-hide-comments-${props.id}`}
          className="show-or-hide-comments"
          onClick={handleToggleComments}
        >
          {props.numComments} Comments
        </button>
      </div>
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