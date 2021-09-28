import React from 'react'
import RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTopic } from '../features/topicSlice'


function Topic() {

  const dispatch = useDispatch();
  const topic = useSelector((state) => state.topic.value)

  const fetchFirstTopic = () => {
      RedditAPI.fetchTopicInfo(0).then(result => {
        dispatch(changeTopic( { title: result.title, author: result.author }))
      })
  }

  // For testing purposes
  const fetchFirstTopicTest = () => {
      dispatch(changeTopic( { title: 'Teste 1', author: 'Teste 2'}))
  }

  useEffect(() =>  {
    //fetchFirstTopic();
    fetchFirstTopicTest();
  }, );

  return (
    <div>
      <h3>Top Thread from r/all:</h3>
      <p>topic title: {topic.title}</p>
      <p>author name: {topic.author}</p>
    </div>
  );
}

export default Topic;