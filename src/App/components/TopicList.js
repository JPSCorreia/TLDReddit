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
    // Mostrar 25 topicos.
    if(index < 25) list.push(<Topic topicData={topic.data} key={index} dataKey={index} subreddit={props.subreddit}/>);
  });

  return (
    <div subreddit={props.subreddit} className='subreddit'>
      <h2 className='subreddit-name'>{props.subreddit}</h2>
      {totalTopicList.isLoading? <LoopCircleLoading color='#ff4500'/> : list }
    </div>
  )
}

export default TopicList;
