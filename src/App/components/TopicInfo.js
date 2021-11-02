import React from 'react'
import * as RedditAPI from '../RedditAPI';
import { useDispatch } from 'react-redux';
import Moment from "react-moment";
import { Route, NavLink } from "react-router-dom";
import TopicList from "./TopicList";

function TopicInfo(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const thisTopicInfoId = `${props.subreddit}-${props.dataKey}`;


  // Handle change subreddit on button click.
  function handleSubredditChange (event) {

    // Add route to routeList.
    const route = 
      <Route 
        path={`/r/${props.topicData.subreddit}`} 
        key={`/r/${props.topicData.subreddit}`}
      >
        <TopicList selectedRoute={`r/${props.topicData.subreddit}`} />
      </Route>;
    dispatch(RedditAPI.addToRouteList(route))
  }

  // Event handler for toggling comments button and changing color of button.
  function handleToggleComments () {
    dispatch(RedditAPI.toggle(thisTopicInfoId))
  }
  

  return (
      <div className="topic-info">
        <p>
          <b>Submitted:</b>{" "}
          <Moment unix fromNow>
            {props.topicData.created_utc}
          </Moment>{" "}
          by <span className="author-head">{props.topicData.author}</span> to{" "}
          <NavLink
            to={`${props.topicData.subreddit}`}
          >
            <span
              className='topic-info-subreddit'
              onClick={handleSubredditChange}
              id={`subreddit-button-${props.topicData.subreddit}`}
            >   
              r/{props.topicData.subreddit}
            </span>
          </NavLink>
        </p>
        <span
          type="button"
          id={`show-or-hide-comments-${thisTopicInfoId}`}
          className="show-or-hide-comments"
          onClick={handleToggleComments}
        >
          {props.topicData.num_comments} Comments
        </span>
      </div>
  );
}

export default TopicInfo;