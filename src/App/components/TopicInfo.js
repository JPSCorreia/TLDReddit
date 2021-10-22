import React from 'react'
import * as RedditAPI from '../RedditAPI';
import { useSelector, useDispatch } from 'react-redux';
import Moment from "react-moment";
import { NavLink } from "react-router-dom";
import routeList from '../App';
// import exampleSubreddits from '../exampleSubreddits'
// import TopicList from "./TopicList";


function TopicInfo(props) {


  // Redux State/Action Management.
  const dispatch = useDispatch();
  const thisTopicInfoId = `${props.subreddit}-${props.dataKey}`;
  const toggleComments = useSelector((state) => state.toggleComments[thisTopicInfoId])
  
  // const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value)
  
  
  // let currentSub = `subreddit-button-${selectedSubreddit.substr(2)}`;


  // Change subreddit and current subreddit button style on button click.
  function handleSubredditChange (event) {
    // if (exampleSubreddits.includes(selectedSubreddit.substr(2))) {
    //   document.getElementById(currentSub).classList.remove('subreddit-button-selected');
    // }
    // if (exampleSubreddits.includes(props.topicData.subreddit)) {
    //   document.getElementById(event.target.id).classList.add('subreddit-button-selected');
    // }
    // console.log(`TopicInfo's handleSubredditChange event.target.id is: ${event.target.id}`)
    // dispatch(RedditAPI.selectSubreddit(`r/${props.topicData.subreddit}`))
    // currentSub = event.target.id;
    // routeList.push(
    //   <Route path={`/r/${props.topicData.subreddit}`} key={`/r/${props.topicData.subreddit}`}>
    //     <TopicList selectedRoute={`/r/${props.topicData.subreddit}`.substr(1)} />
    //   </Route>
    // )
    console.log(routeList)
  }


  // Event handler for toggling comments button and changing color of button.
  function handleToggleComments () {
    dispatch(RedditAPI.toggle(thisTopicInfoId))
    if (!toggleComments) {
      document.getElementById(`show-or-hide-comments-${thisTopicInfoId}`).style.color =
        "#369";
    } else {
      document.getElementById(`show-or-hide-comments-${thisTopicInfoId}`).style.color =
        "black";
    }
  }

  <NavLink
    to={`/r/${props.topicData.subreddit}`}
  >
    <span
      className='topic-info-subreddit'
      onClick={handleSubredditChange}
      id={`subreddit-button-${props.topicData.subreddit}`}
    >
      r/{props.topicData.subreddit}
    </span>
  </NavLink>

  return (
      <div className="topic-info">
        <p>
          <b>Submitted:</b>{" "}
          <Moment unix fromNow>
            {props.topicData.created_utc}
          </Moment>{" "}
          by <span className="author-head">{props.topicData.author}</span> to{" "}
          <span
            className='topic-info-subreddit'
            onClick={handleSubredditChange}
            id={`subreddit-button-${props.topicData.subreddit}`}
          >
            r/{props.topicData.subreddit}
          </span>
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