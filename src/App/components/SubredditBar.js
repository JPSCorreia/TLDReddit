import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as RedditAPI from '../RedditAPI';
import { NavLink } from "react-router-dom";

function SubredditBar(props) {


  // Redux State/Action Management.
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value)
  const routes = useSelector((state) => state.routes.data);
  useEffect(() =>  {
    dispatch(RedditAPI.selectSubreddit(selectedSubreddit))
  },[dispatch,selectedSubreddit])


  // Push chosen subreddits to a list.
  const subredditBarList = [];
  routes.forEach((subreddit, index) => {
    const id = `subreddit-button-${subreddit.substr(3)}-${index}`
    if (index > 0) {
      subredditBarList.push(
        <span className='separator' key={index+100} >-</span>
      )
    }
    subredditBarList.push(
      <NavLink
        to={subreddit.substr(3)}
        className='subreddit-button' 
        id={id} 
        key={index}
      >
        {subreddit.substr(3)}
      </NavLink>
    )
  })

  return (
    <div className='subreddit-bar'>
      {subredditBarList}
    </div>
  )
}

export default SubredditBar;