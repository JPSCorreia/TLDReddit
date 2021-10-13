import React from 'react'
import * as RedditAPI from '../RedditAPI';
import { useSelector, useDispatch } from 'react-redux';
import Moment from "react-moment";

function TopicInfo(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const thisTopicInfoId = `${props.subreddit}-${props.dataKey}`;
  const toggleComments = useSelector((state) => state.toggleComments[thisTopicInfoId])

  
  // Event handler for toggling comments button and changing color of button.
  function handleToggleComments () {
    dispatch(RedditAPI.toggle(thisTopicInfoId))
    if (!toggleComments) {
      document.getElementById(`show-or-hide-comments-${thisTopicInfoId}`).style.color =
        "blue";
    } else {
      document.getElementById(`show-or-hide-comments-${thisTopicInfoId}`).style.color =
        "black";
    }
  }

    
  return (
      <div className="topic-info">
        <p>
          <b>Submitted:</b>{" "}
          <Moment unix fromNow>
            {props.topicData.created_utc}
          </Moment>{" "}
          by <span className="author-head">{props.topicData.author}</span> to{" "}
          <a
            href={`https://www.reddit.com/r/${props.topicData.subreddit}`}
            target="_blank"
            rel="noreferrer"
          >
            r/{props.topicData.subreddit}
          </a>
        </p>
        <button
          type="button"
          id={`show-or-hide-comments-${thisTopicInfoId}`}
          className="show-or-hide-comments"
          onClick={handleToggleComments}
        >
          {props.topicData.num_comments} Comments
        </button>
      </div>
  );
}

export default TopicInfo;