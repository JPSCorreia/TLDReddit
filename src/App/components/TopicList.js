import React from 'react'
import Topic from './Topic';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoopCircleLoading } from 'react-loadingg';


function TopicList(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const topicList = useSelector((state) => state.topicList[props.subreddit] || [])

  const totalTopicList = useSelector((state) => state.topicList)
  
  useEffect(() =>  {
    dispatch(RedditAPI.getTopicList(props.subreddit));
  }, [dispatch, props.subreddit]);

  // Push different Topic components to a list.
  const list = [] 
  topicList.forEach((topic, index) => {
    // Show 25 topics.
    if(index < 25) list.push(<Topic 
      topicData={topic.data} 
      key={index+1} 
      dataKey={index+1} 
      subreddit={props.subreddit}
      id={`${props.subreddit}-${index+1}`}
    />);
  });

  return (
    <div subreddit={props.subreddit} className='subreddit'>
      <h2 className='subreddit-name'>
        <div className='subreddit-name-border'>{props.subreddit}</div>
      </h2>
      {totalTopicList.isLoading? (
      <LoopCircleLoading
        color='red'
      />)
       : list }
    </div>
  )
}

export default TopicList;
