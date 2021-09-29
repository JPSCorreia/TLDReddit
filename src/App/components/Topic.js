import React from 'react'

function Topic(props) {

  // const dispatch = useDispatch();
  // const topic = useSelector((state) => state.topic)

  // useEffect(() =>  {
  //   dispatch(RedditAPI.getSingleTopic(props.id))
  // }, [dispatch, props.id]);

 
  return (
    <div className='topic'>
      <h4>{props.topicName}</h4>
      {/* <img alt='thumbnail' src={props.topicList[props.id].data.thumbnail}></img>
      <p>Author: {props.topicList[props.id].data.author}</p>
      <p>Subreddit: r/{props.topicList[props.id].data.subreddit}</p> */}
    </div>
  );
}

export default Topic;