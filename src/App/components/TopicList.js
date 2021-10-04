import React from 'react'
import Topic from './Topic';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function TopicList(props) {

  const dispatch = useDispatch();
  const topicList = useSelector((state) => state.topicList.value)



    useEffect(() =>  {

       function dispatchTopicList () {
        dispatch(RedditAPI.getTopicList(props.subreddit))
       }
       dispatchTopicList()

    }, [dispatch, props.subreddit]);

  const list = [];
  topicList.forEach((topic, index) => {
    // Provisorio só 3 topics a mostrar
    //if (index === 0) dispatch(RedditAPI.getTopicList(props.subreddit))
    if(index < 3) list.push(<Topic topic={topic.data} key={topic.data.id} />);
  });

   return (
    <div>
      <br></br>
      <h2 className='subreddit-name'>{props.subreddit}:</h2>
      {list}
    </div>
  )

}

export default TopicList;
