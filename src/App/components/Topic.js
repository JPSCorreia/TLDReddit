import React from 'react'

function Topic(props) {

  // const dispatch = useDispatch();
  // const topic = useSelector((state) => state.topic)

  // useEffect(() =>  {
  //   dispatch(RedditAPI.getSingleTopic(props.id))
  // }, [dispatch, props.id]);

  const thumbnailExists = (thumbnail) => {
    if (!thumbnail || thumbnail !== "default") {
      return <img alt="thumbnail" src={thumbnail}></img>;
    }
  };

  return (
    <div className="topic">
      <h4>{props.topic.title}</h4>
      {thumbnailExists(props.topic.thumbnail)}
      <p>Author: {props.topic.author}</p>
      <p>
        Subreddit:{" "}
        <a
          href={`https://www.reddit.com/r/${props.topic.subreddit}`}
          target="_blank"
          rel="noreferrer"
        >
          r/{props.topic.subreddit}
        </a>
      </p>
    </div>
  );
}

export default Topic;