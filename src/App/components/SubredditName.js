import React from 'react'
import redditGuy from '../../Images/reddit_guy.png'
import { useSelector } from 'react-redux';
import MobileTopBar from './MobileTopBar';

function SubredditName(props) {

  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value)
  const about = useSelector((state) => state.about[selectedSubreddit] || [])

  return (
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
      <div
      alt="sub icon"
      className='subreddit-icon-substitute'
      src={redditGuy}
    >
    </div>
      }
      <h2>
        {selectedSubreddit}
      </h2> 
    </div>
    <MobileTopBar />
    <div className='subreddit-name-sidebar'> </div>
    </div>
  );
}

export default SubredditName;