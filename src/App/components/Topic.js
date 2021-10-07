import React from 'react'
import CommentList from './CommentList';
import ReactHtmlParser from 'react-html-parser';
import * as App from '../App'


function Topic(props) {



  const resizeThumbnail = () => {
    document.getElementById(`thumbnail-${props.topicData.id}`).src='';
  }

  console.log(props.topicData.thumbnail)





  return (
    <div 
      className="topic" 
      topic-id={props.topicData.id} 
      id={`${props.subreddit}-${props.dataKey}`}
    >
      <div className='topic-and-thumbnail'>
        <div className='topic-name'>
          <b>
          {ReactHtmlParser(props.topicData.title)}
          </b>
        </div>
        
        <div className='thumbnail-container'>
          <button type='button' className='resize-image-button'></button>
          {App.thumbnailExists(props.topicData.thumbnail, props.topicData.id)}
        </div>
      </div>

      <CommentList 
        url={props.topicData.permalink} 
        dataKey={props.dataKey} 
        subreddit={props.subreddit} 
        subName={props.topicData.subreddit}
        id={`${props.subreddit}-${props.dataKey}`}
        created={App.convertUnixToDate(props.topicData.created_utc)}
        numComments={props.topicData.num_comments}
        author={props.topicData.author}
      />
    </div>
  );
}

export default Topic;
