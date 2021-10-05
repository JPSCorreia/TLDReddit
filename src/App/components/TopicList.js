import React from 'react'
import Topic from './Topic';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function TopicList(props) {

  const dispatch = useDispatch();
  const topicList = useSelector((state) => state.topicList[props.subreddit] || [])
 
  useEffect(() =>  {
    dispatch(RedditAPI.getTopicList(props.subreddit));
  }, [dispatch, props.subreddit]);

  return (
    <div>
      <br></br>
      <h2 className='subreddit-name'>{props.subreddit}:</h2>
      { topicList.filter((topic, i) => i > 3).map(topic => (<Topic topic={topic.data} key={topic.data.id} />)) }
    </div>
  )
}

export default TopicList;
