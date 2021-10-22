import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as RedditAPI from '../RedditAPI';
import exampleSubreddits from '../exampleSubreddits'
import { NavLink } from "react-router-dom";
import { ROUTES } from '../routes';

function SubredditBar(props) {


  // Redux State/Action Management.
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value)
  useEffect(() =>  {
    dispatch(RedditAPI.selectSubreddit(selectedSubreddit))
  },[dispatch,selectedSubreddit])


  // Push chosen subreddits to a list.
  const subredditBarList = [];
  exampleSubreddits.forEach((subreddit, index) => {
    const id = `subreddit-button-${subreddit}`
    if (index > 0) {
      subredditBarList.push(
        <span className='separator' key={index+100} >-</span>
      )
    }
    subredditBarList.push(
      <NavLink
        to={ROUTES[subreddit.toUpperCase()]}
        className='subreddit-button' 
        id={id} 
        key={index}
      >
        {subreddit}
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













  // let currentSub = `subreddit-button-${selectedSubreddit.substr(2)}`;


  // Change subreddit and current subreddit/new subreddit button style on button click.
  // function handleSubredditChange (event) {
  //  if (exampleSubreddits.includes(selectedSubreddit.substr(2))) {
  //    document.getElementById(currentSub).classList.remove('subreddit-button-selected');
  //  }
  //  if (exampleSubreddits.includes(event.target.innerText)) {
  //   document.getElementById(event.target.id).classList.add('subreddit-button-selected');
  //  }
  //  dispatch(RedditAPI.selectSubreddit(`r/${event.target.innerText}`))
  //  currentSub = event.target.id;
  // }




    // if (index > 0) {
    //   subredditBarList.push(
    //     <button 
    //       type="button" 
    //       className='subreddit-button' 
    //       id={id} 
    //       onClick={handleSubredditChange}
    //       key={index}
    //     >
    //       {subreddit}
    //     </button>
    //   )
    // } else {
    //   subredditBarList.push(
    //     <button 
    //       type="button" 
    //       className='subreddit-button subreddit-button-selected' 
    //       id={id} 
    //       onClick={handleSubredditChange}
    //       key={index}
    //     >
    //       {subreddit}
    //     </button>
    //   )
    // }