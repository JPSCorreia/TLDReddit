import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as RedditAPI from '../RedditAPI';
let currentSub = 'subreddit-button-all';


function SubredditBar(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value)
  useEffect(() =>  {
    dispatch(RedditAPI.selectSubreddit(selectedSubreddit))
  },[dispatch,selectedSubreddit])


  // Change subreddit and current subreddit/new subreddit button style on button click.
  function handleSubredditChange (event) {
    document.getElementById(currentSub).classList.remove('subreddit-button-selected');
    document.getElementById(event.target.id).classList.add('subreddit-button-selected');
    console.log(currentSub)
    console.log(event.target.id)
    dispatch(RedditAPI.selectSubreddit(`r/${event.target.innerText}`))
    currentSub = event.target.id;
  }

  // List of subreddits chosen.
  const subredditBarList = [];
  const exampleSubreddits = [
    'Astronomy',
    'Formula1',
    'Futurology',
    'Gifs',
    'PCGaming',
    'Pics',
    'ProgrammerHumor',
    'Portugal',
    'Space',
    'Science',
    'Technology',
    'WorldNews'
  ]

  
  // Push chosen subreddits to a list.
  exampleSubreddits.forEach((subreddit, index) => {
    const id = `subreddit-button-${subreddit}`
    subredditBarList.push(
      <span className='separator' key={index+100} >-</span>
    )
    subredditBarList.push(
      <button 
        type="button" 
        className='subreddit-button' 
        id={id} 
        onClick={handleSubredditChange}
        key={index}
      >
        {subreddit}
      </button>
    )
  })

  return (
    <div className='subreddit-bar'>
      <button type="button" className='subreddit-button subreddit-button-selected' id='subreddit-button-all' onClick={handleSubredditChange}>All</button>
      {subredditBarList}
    </div>
  )
}

export default SubredditBar;