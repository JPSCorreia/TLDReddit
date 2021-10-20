import React from 'react'
import Topic from './Topic';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoopCircleLoading } from 'react-loadingg';
import PageChanger from './PageChanger';
import SideBar from "./SideBar";

function TopicList(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const totalTopicList = useSelector((state) => state.topicList) // just to check if all threads are loaded.
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
        <div className='subreddit-name-border'>
          <h2 className='subreddit-name'>
            {selectedSubreddit}
          </h2> 
        </div>
      <div className='main-subreddit-body'> 
      <div className='all-topics'>
      {totalTopicList.isLoading? (
      <LoopCircleLoading
        color='red'
      />)
       : list }
       </div>
       {totalTopicList.isLoading?
      '' : <SideBar /> 
      }
       
       </div>
      {totalTopicList.isLoading?
      '' : <PageChanger /> 
      }
    
    </div>
  )
}

export default TopicList;