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
    // document.getElementById(currentSub).style.transition = '0.4s'
    // document.getElementById(currentSub).style.color = 'black'
    // document.getElementById(event.target.id).style.color = '#ff4500'
    // document.getElementById(event.target.id).style.transition = '0s'
    document.getElementById(currentSub).classList.remove('subreddit-button-selected');
    document.getElementById(event.target.id).classList.add('subreddit-button-selected');

    console.log(currentSub)
    console.log(event.target.id)

    dispatch(RedditAPI.selectSubreddit(`r/${event.target.innerText}`))
    currentSub = event.target.id;
  }




  return (
    <div className='subreddit-bar'>
      <button type="button" className='subreddit-button subreddit-button-selected' id='subreddit-button-all' onClick={handleSubredditChange}>All</button>
      <span className='separator'>-</span>
      <button type="button" className='subreddit-button' id='subreddit-button-astronomy' onClick={handleSubredditChange}>Astronomy</button>
      <span className='separator'>-</span>
      <button type="button" className='subreddit-button' id='subreddit-button-formula1' onClick={handleSubredditChange}>Formula1</button>
      <span className='separator'>-</span>
      <button type="button" className='subreddit-button' id='subreddit-button-futurology' onClick={handleSubredditChange}>Futurology</button>
      <span className='separator'>-</span>
      <button type="button" className='subreddit-button' id='subreddit-button-pcgaming' onClick={handleSubredditChange}>PCGaming</button>
      <span className='separator'>-</span>
      <button type="button" className='subreddit-button' id='subreddit-button-pics' onClick={handleSubredditChange}>Pics</button>
      <span className='separator'>-</span>
      <button type="button" className='subreddit-button' id='subreddit-button-programmerhumor' onClick={handleSubredditChange}>ProgrammerHumor</button>
      <span className='separator'>-</span>
      <button type="button" className='subreddit-button' id='subreddit-button-portugal' onClick={handleSubredditChange}>Portugal</button>
      <span className='separator'>-</span>
      <button type="button" className='subreddit-button' id='subreddit-button-space' onClick={handleSubredditChange}>Space</button>
      <span className='separator'>-</span>
      <button type="button" className='subreddit-button' id='subreddit-button-science' onClick={handleSubredditChange}>Science</button>
      <span className='separator'>-</span>
      <button type="button" className='subreddit-button' id='subreddit-button-technology' onClick={handleSubredditChange}>Technology</button>
      <span className='separator'>-</span>
      <button type="button" className='subreddit-button' id='subreddit-button-worldnews' onClick={handleSubredditChange}>WorldNews</button>
    </div>
  )
}

export default SubredditBar;