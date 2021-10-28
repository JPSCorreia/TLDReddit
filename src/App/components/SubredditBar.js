import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as RedditAPI from '../RedditAPI';
import { NavLink } from "react-router-dom";
import TLDRedditlogo from '../../Style/TLDReddit-logo-smaller.png'
import userIcon from '../../Style/user_icon.png'
import passwordIcon from '../../Style/password_icon.png'

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
    <div className='top-bar'>
      <NavLink
        to={'/'}
        className='subreddit-logo' 
        id='subreddit-logo-button'
      >
        <img 
          className="logo" 
          alt="TLDReddit logo"
          src={TLDRedditlogo}
        >
        </img>  
      </NavLink>
     <div className='subreddit-bar'>
       {subredditBarList}
     </div>
     <div className='login-bar'>
       <form 
         className="input-form"
         id="login-form"
         action="" 
       >
         <img 
           className="login-icon" 
           alt="login icon"
           src={userIcon}
         >
         </img> 
         <input 
           type="text" 
           className='login-input'
           placeholder="Username" 
           name="search"
         >
         </input>
         <img 
           className="password-icon" 
           alt="login icon"
           src={passwordIcon}
         >
         </img> 
         <input 
           type="text" 
           className='login-input'
           placeholder="Password" 
           name="search"
          >
          </input>
        </form>
      </div>
    </div>
  )
}

export default SubredditBar;