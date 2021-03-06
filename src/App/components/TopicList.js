import React from 'react'
import Topic from './Topic';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { LoopCircleLoading } from 'react-loadingg';
import PageChanger from './PageChanger';
import SideBar from "./SideBar";
import SubredditName from './SubredditName';


function TopicList(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const totalTopicList = useSelector((state) => state.topicList) // just to check if all threads are loaded.
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);
  const topicList = useSelector((state) => state.topicList[selectedSubreddit] || [])
  const searchItem = useSelector((state) => state.searchItem.value);
  const theme = useSelector((state) => state.theme.value);
  const { id }  = useParams();




  // Change subreddit when route is accessed (passed as prop)
  useEffect(() =>  {
    dispatch(RedditAPI.selectSubreddit(`r/${id}`))
}, [dispatch, id]);

  // Get subreddit data when subreddit changes.
  useEffect(() =>  {
      dispatch(RedditAPI.getTopicList(selectedSubreddit));
  }, [dispatch, selectedSubreddit]);

  // Push different Topic components to a list.
  let list = [] 
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

  // Filter array of topic components according to title, username or selftext when user types in search bar.
  if (searchItem) {
    const filteredList = list.filter( element => {
      return (element.props.topicData.title.toLowerCase().includes(searchItem.toLowerCase()) || element.props.topicData.author.toLowerCase().includes(searchItem.toLowerCase()) || element.props.topicData.selftext.toLowerCase().includes(searchItem.toLowerCase()))
    })
    list = filteredList;
  }

  return (
    <div subreddit={selectedSubreddit} className='subreddit'>
      <SubredditName />
      <div className='main-subreddit-body'> 
        <div className='all-topics'>
          {totalTopicList.isLoading? (
            <LoopCircleLoading
              color={ theme ? '#ff4500' : '#bb0010' }
            />
          )
          : 
            list 
          }
          {list.length === 0 && searchItem.length > 0?
            <p 
              className='no-results-found'
            >
              Your search - <b>{searchItem}</b> - did not match any documents.
            </p> 
          : 
            ''
          }
          {totalTopicList.isLoading?
            '' 
          : 
            <PageChanger /> 
          }

        </div>
        {totalTopicList.isLoading?
          '' 
        : 
          <SideBar  />
        }
      </div>
    </div>
  )
}

export default TopicList;