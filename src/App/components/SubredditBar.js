import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as RedditAPI from '../RedditAPI';
import { NavLink } from "react-router-dom";
import LoginBar from './LoginBar';

function SubredditBar(props) {


  // Redux State/Action Management.
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value)
  const theme = useSelector((state) => state.theme.value);
  const routes = useSelector((state) => state.routes.data);
  useEffect(() =>  {
    dispatch(RedditAPI.selectSubreddit(selectedSubreddit))
  },[dispatch,selectedSubreddit])

  function toggleTheme () {
    dispatch(RedditAPI.toggleTheme(!theme))
    if (theme) {
      document.body.classList.add('theme--default')
      document.body.classList.remove('theme--dark')
      document.getElementById('theme-icon').classList.add('fa-sun-o')
      document.getElementById('theme-icon').classList.remove('fa-moon-o')
    } else {
      document.body.classList.add('theme--dark')
      document.body.classList.remove('theme--default')
      document.getElementById('theme-icon').classList.add('fa-moon-o')
      document.getElementById('theme-icon').classList.remove('fa-sun-o')
    }
  }

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
    <div className='top-bar'>
      
      <NavLink
        to={'/'}
        className='subreddit-logo' 
        id='subreddit-logo-button'
      >
      <div 
          className="logo" 
          alt="TLDReddit logo"
        >
        </div>  
      </NavLink>
      
      <div className='subreddit-bar'>
        {subredditBarList}
      </div>
      <LoginBar />
      <i className="fa theme-icon fa-moon-o moon-icon" onClick={toggleTheme} id='theme-icon'></i>
    </div>
  )
}

export default SubredditBar;