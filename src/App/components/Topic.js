import React from 'react'
import CommentList from './CommentList';
import ArrowsContainer from './ArrowsContainer';
import ReactHtmlParser from "react-html-parser";
import ThumbnailContainer from './ThumbnailContainer';
import TopicInfo from './TopicInfo';
import ImagePreview from './ImagePreview';
import { useSelector } from 'react-redux';


function Topic(props) {

  // Redux State/Action Management. 
  const previewImageShowing = useSelector((state) => state.previewImage[props.id]);


  return (
    <div className='whole-topic-container'>
      <ArrowsContainer 
        topicData={props.topicData}
        dataKey={props.dataKey}
        subreddit={props.subreddit}
      />
      <div className='topic-container'>
        <div
          className='topic'
          topic-id={props.topicData.id}
          id={`${props.subreddit}-${props.dataKey}`}
        >
          <div className='topic-and-thumbnail'>
            <div className='topic-name'>
              <b>{ReactHtmlParser(props.topicData.title)}</b>
          </div>
          <ThumbnailContainer 
            topicData={props.topicData} 
            id={`${props.subreddit}-${props.dataKey}`} 
          />
          </div>
          { previewImageShowing && 
            <ImagePreview 
              src={props.topicData.url} 
              id={`${props.subreddit}-${props.dataKey}`}
              url={props.topicData.url}
            />
          }
          <TopicInfo 
            subName={props.topicData.subreddit}
            selftext={props.topicData.selftext}
            numComments={props.topicData.num_comments}
            author={props.topicData.author}
            created_utc={props.topicData.created_utc}
            subreddit={props.subreddit}
            id={`${props.subreddit}-${props.dataKey}`}
          />
          <CommentList
            url={props.topicData.permalink}
            title={ReactHtmlParser(props.topicData.title)}
            dataKey={props.dataKey}
            subreddit={props.subreddit}
            selftext={props.topicData.selftext}
            subName={props.topicData.subreddit}
            points={props.topicData.ups}
            id={`${props.subreddit}-${props.dataKey}`}
            created_utc={props.topicData.created_utc}
            numComments={props.topicData.num_comments}
            author={props.topicData.author}
          />
        </div>
      </div>
    </div>
  );
}

export default Topic;
