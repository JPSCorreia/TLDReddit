import React from 'react'
import Topic from './Topic';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoopCircleLoading } from 'react-loadingg';


function TopicList(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const totalTopicList = useSelector((state) => state.topicList)
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);
  const topicList = useSelector((state) => state.topicList[selectedSubreddit] || [])
  useEffect(() =>  {
    dispatch(RedditAPI.getTopicList(selectedSubreddit));
  }, [dispatch, selectedSubreddit]);


  // Push different Topic components to a list.
  const list = [] 
  topicList.forEach((topic, index) => {
    // Show 25 topics.
    if(index < 25) list.push(<Topic 
      topicData={topic.data} 
      key={index+1} 
      dataKey={index+1} // Topic number for Identification use.
      subreddit={selectedSubreddit}
      id={`${selectedSubreddit}-${index+1}`}
    />);
  });

  
  return (
    <div subreddit={selectedSubreddit} className='subreddit'>
      <h2 className='subreddit-name'>
        <div className='subreddit-name-border'>{selectedSubreddit}</div>
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
