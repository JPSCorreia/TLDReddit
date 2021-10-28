import React from 'react'
import Topic from './Topic';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoopCircleLoading } from 'react-loadingg';
import PageChanger from './PageChanger';
import SideBar from "./SideBar";
import redditGuy from '../../Style/reddit_guy.png'

function TopicList(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const totalTopicList = useSelector((state) => state.topicList) // just to check if all threads are loaded.
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);
  const topicList = useSelector((state) => state.topicList[selectedSubreddit] || [])
  const searchItem = useSelector((state) => state.searchItem.value);
  const about = useSelector((state) => state.about[selectedSubreddit] || [])

  // Change subreddit when route is accessed (passed as prop)
  useEffect(() =>  {
    dispatch(RedditAPI.selectSubreddit(props.selectedRoute))
}, [dispatch, props.selectedRoute]);

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

  console.log(about)

  return (
    <div subreddit={selectedSubreddit} className='subreddit'>
        <div className='subreddit-name-border'>
          <div className='subreddit-name'>
            { about.icon_img?
            <img
              alt="sub icon"
              className='subreddit-icon'
              src={about.icon_img}
            >
            </img>
            :
            <img
            alt="sub icon"
            className='subreddit-icon'
            src={redditGuy}
          >
          </img>
            }
            <h2>
              {selectedSubreddit}
            </h2> 
          </div>
          <div className='subreddit-name-sidebar'>
            teste
          </div>
        </div>
      <div className='main-subreddit-body'> 
      <div className='all-topics'>
      {totalTopicList.isLoading? (
      <LoopCircleLoading
        color='red'
      />)
       : list }
      {list.length === 0 && searchItem.length > 0?
        <p className='no-results-found'>Your search - <b>{searchItem}</b> - did not match any documents.</p> 
      : 
        ''
      }
       </div>
       {totalTopicList.isLoading?
      '' : <SideBar  />
      }
       
       </div>
      {totalTopicList.isLoading?
      '' : <PageChanger /> 
      }
    
    </div>
  )
}

export default TopicList;