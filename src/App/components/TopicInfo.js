import React from 'react'
import * as RedditAPI from '../RedditAPI';
import { useSelector, useDispatch } from 'react-redux';
import Moment from "react-moment";

function TopicInfo(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const toggleComments = useSelector((state) => state.toggleComments[props.id])

  
  // Event handler for toggling comments button and changing color of button.
  function handleToggleComments () {
    dispatch(RedditAPI.toggle(props.id))
    if (!toggleComments) {
      document.getElementById(`show-or-hide-comments-${props.id}`).style.color =
        "blue";
    } else {
      document.getElementById(`show-or-hide-comments-${props.id}`).style.color =
        "black";
    }
  }

    
  return (
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
  );
}

export default TopicInfo;