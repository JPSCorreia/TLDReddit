import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as RedditAPI from '../RedditAPI';


function PageChanger(props) {

  const dispatch = useDispatch();
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);
  const topicList = useSelector((state) => state.topicList[selectedSubreddit] || [])

  function handleSubredditBefore () {
    console.log(topicList.indexPageNumber)
    const currentPage = topicList.indexPageNumber - 1;
    const afterCounter = topicList.afterCounter - 25;
    const beforeCounter = topicList.beforeCounter - 25;
    const nextPage = [`https://www.reddit.com/${selectedSubreddit}.json?count=${beforeCounter}&before=${topicList.before}`, selectedSubreddit, currentPage, beforeCounter, afterCounter]
    dispatch(RedditAPI.getTopicListBefore(nextPage));

  }

  function handleSubredditAfter () {
    console.log(topicList.indexPageNumber)
    const currentPage = topicList.indexPageNumber + 1;
    const afterCounter = topicList.afterCounter + 25;
    const beforeCounter = topicList.beforeCounter + 25;
    const nextPage = [`https://www.reddit.com/${selectedSubreddit}.json?count=${afterCounter}&after=${topicList.after}`, selectedSubreddit, currentPage, beforeCounter, afterCounter]
    dispatch(RedditAPI.getTopicListAfter(nextPage));

  }

  //todo: Fix loading multiple times (might be due to parent components loading multiple times), loads 28 times on r/all, 8-10 on r/astronmy, 3-4 minimum on rest
  if (selectedSubreddit) console.log('page changer loading multiple times test')

  return (
    <div className="page-changer">
      {/* Check to see if user is in first page or not and apply class accordingly */}
      { (topicList.indexPageNumber > 1)?
        <div className='page-arrow-and-name' onClick={handleSubredditBefore}>
          <div 
            className='page-arrow'
          >
            ←
          </div>
          <div>
            prev
          </div>
        </div>
        : 
        <div className='page-arrow-and-name-unavailable'>
          <div 
            className='page-arrow'
          >
            ←
          </div>
          <div>
            prev
          </div>
        </div>
      }
      <div className='page-counter'>
      {topicList.indexPageNumber}
      </div>
      <div className='page-arrow-and-name' onClick={handleSubredditAfter}>
        <div>
          next
        </div>
        <div 
          className='page-arrow' 
        >
          →
        </div>
      </div>
  </div>
  );
}

export default PageChanger;