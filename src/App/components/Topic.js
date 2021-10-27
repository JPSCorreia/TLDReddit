import React from 'react'
import CommentList from './CommentList';
import ArrowsContainer from './ArrowsContainer';
import ReactHtmlParser from "react-html-parser";
import ThumbnailContainer from './ThumbnailContainer';
import TopicInfo from './TopicInfo';
import ImagePreview from './ImagePreview';
import { useSelector, useDispatch } from 'react-redux';
import * as RedditAPI from '../RedditAPI';


function Topic(props) {

  // Redux State/Action Management. 
  const previewImageShowing = useSelector((state) => state.previewImage[props.id]);
  const dispatch = useDispatch();
  const thisTopicInfoId = `${props.subreddit}-${props.dataKey}`;
  const toggleComments = useSelector((state) => state.toggleComments[thisTopicInfoId])

  // Event handler for toggling comments button and changing color of button. REPEAT of TopicInfo.js function.
  function handleToggleComments () {
    dispatch(RedditAPI.toggle(thisTopicInfoId))
    if (!toggleComments) {
      document.getElementById(`show-or-hide-comments-${thisTopicInfoId}`).style.color =
        "blue";
    } else {
      document.getElementById(`show-or-hide-comments-${thisTopicInfoId}`).style.color =
        "black";
    }
  }

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

            {(props.topicData.selftext || props.topicData.is_gallery) 
              ? <div className='topic-name' onClick={handleToggleComments}>
                    {ReactHtmlParser(props.topicData.title)}
                </div>
              : <div  className='topic-name'>
                  <a 
                    // Check if topic is a video and redirect to video URL (avoids linking directly to reddit)
                    href={ 
                      (props.topicData.media && props.topicData.media.reddit_video 
                      ? props.topicData.media.reddit_video.fallback_url
                      : props.topicData.url)
                    } 
                    target='_blank' 
                    rel='noreferrer'
                  >
                    {ReactHtmlParser(props.topicData.title)}
                  </a>
                </div>
            }



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
