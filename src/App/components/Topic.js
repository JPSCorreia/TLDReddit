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
            subreddit={props.subreddit}
            dataKey={props.dataKey}
          />
          </div>

          { previewImageShowing && 
            <ImagePreview 
              topicData={props.topicData} 
              subreddit={props.subreddit}
              dataKey={props.dataKey}
            />
          }

          <TopicInfo 
            topicData={props.topicData} 
            subreddit={props.subreddit}
            dataKey={props.dataKey}
          />

          <CommentList
            topicData={props.topicData} 
            subreddit={props.subreddit}
            dataKey={props.dataKey}
            title={ReactHtmlParser(props.topicData.title)}
          />

        </div>

      </div>

    </div>
  );
}

export default Topic;
