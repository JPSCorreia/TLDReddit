import React from 'react'
import Topic from './Topic';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function TopicList() {

  const dispatch = useDispatch();
  const topicList = useSelector((state) => state.topicList.value)

   useEffect(() =>  {
    dispatch(RedditAPI.getTopicList())
  },[dispatch]);

  const list = [];
  topicList.forEach((topic) => {
    list.push(<Topic topic={topic} />);
  });

   return (
    <div>
      {list}
    </div>
  )

}

export default TopicList;


