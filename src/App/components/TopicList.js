import React from 'react'
import Topic from './Topic';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function TopicList(props) {

  // Redux State/Action Management:
  const dispatch = useDispatch();
  const topicList = useSelector((state) => state.topicList[props.subreddit] || [])
  useEffect(() =>  {
    dispatch(RedditAPI.getTopicList(props.subreddit));
  }, [dispatch, props.subreddit]);


  const list = [] 
  topicList.forEach((topic, index) => {
    // Provisorio só 3 topics a mostrar
    if(index < 3) list.push(<Topic topicData={topic.data} key={index} dataKey={index} subreddit={props.subreddit}/>);
  });

  
  return (
    <div subreddit={props.subreddit}>
      <br></br>
      <h2 className='subreddit-name'>{props.subreddit}:</h2>
      {list}
    </div>
  )
}

export default TopicList;


  
  // topicList
  //   .filter((topic, i) => i < 3)
  //     .map((topic, index) => (<Topic topic={topic.data} key={index} />)) 