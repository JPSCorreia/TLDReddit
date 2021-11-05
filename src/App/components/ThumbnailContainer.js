import React from 'react'
import textIcon from "../../Images/text-icon-larger.png";
import nsfwIcon from "../../Images/nsfw-icon-larger.png";
import spoilerIcon from "../../Images/spoiler-alert.png";
import noPreviewIcon from "../../Images/no-preview-icon.png";
import { useSelector, useDispatch } from 'react-redux';
import * as RedditAPI from '../RedditAPI';


function ThumbnailContainer(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const thisThumbnailId = `${props.subreddit}-${props.dataKey}`;
  const previewImageShowing = useSelector((state) => state.previewImage[thisThumbnailId]);
  const toggleComments = useSelector((state) => state.toggleComments[thisThumbnailId])
  

  // Detect type of media.
  let media = '';
  if (['image'].includes(props.topicData.post_hint) || props.topicData.domain.includes("imgur.com")) media = 'image';
  if (props.topicData.is_gallery) media = 'gallery';
  if (['hosted:video', 'rich:video'].includes(props.topicData.post_hint) || props.topicData.domain.includes("gfycat.com") || props.topicData.domain.includes("twitch.tv")) media = 'video';
  if (props.topicData.media && props.topicData.media.type && props.topicData.media.type.includes('twitter.com')) media = 'tweet';
  if (["default", "self", ""].includes(props.topicData.thumbnail)) media = 'text';


  // Handle clicking toggle preview button.
  function togglePreview() {
    if (media === 'text') {
      dispatch(RedditAPI.toggle(thisThumbnailId))
      if (!toggleComments) {
        document.getElementById(`thumbnail-container-${thisThumbnailId}`).classList.remove(`preview-${media}-button-open`);
        document.getElementById(`thumbnail-container-${thisThumbnailId}`).classList.add(`preview-${media}-button-close`);
      } else {
        document.getElementById(`thumbnail-container-${thisThumbnailId}`).classList.remove(`preview-${media}-button-close`);
        document.getElementById(`thumbnail-container-${thisThumbnailId}`).classList.add(`preview-${media}-button-open`);
      }
    } else {
      console.log(`${media} preview on topic ${thisThumbnailId} to: ${previewImageShowing? 'hide' :'show'}`)
      dispatch(RedditAPI.preview(thisThumbnailId))
      if (!previewImageShowing) {
        document.getElementById(`thumbnail-container-${thisThumbnailId}`).classList.remove(`preview-${media}-button-open`);
        document.getElementById(`thumbnail-container-${thisThumbnailId}`).classList.add(`preview-${media}-button-close`);
      } else {
        document.getElementById(`thumbnail-container-${thisThumbnailId}`).classList.remove(`preview-${media}-button-close`);
        document.getElementById(`thumbnail-container-${thisThumbnailId}`).classList.add(`preview-${media}-button-open`);
      }
    }
  }

  // Searchs for thumbnail and adds text thumbnail or nsfw thumbnail for posts of those types.
  //todo: Keep same thumbnail aspect ratio as reddit, get width and height from thumbnail_width and thumbnail_height.
  const thumbnailExists = (thumbnail, url, id) => {
      
      if (["default", "self", ""].includes(thumbnail) && (props.topicData.domain === "i.imgur.com" || props.topicData.domain === "giant.gfycat.com")) {
        return (
          <a href={url} target='_blank' rel='noreferrer'>
          <img
            alt='thumbnail'
            id={`thumbnail-${id}`}
            title='spoiler-icon'
            src={noPreviewIcon}
            className='thumbnail thumbnail-substitute'
          ></img>
          </a>
        )

      } else if (["nsfw"].includes(thumbnail)) {
        return (
          <img
            alt='thumbnail'
            id={`thumbnail-${id}`}
            title='nsfw-icon'
            src={nsfwIcon}
            className='thumbnail thumbnail-substitute'
          ></img>
        );
      } else if (["spoiler"].includes(thumbnail)) {
        return (
          <img
            alt='thumbnail'
            id={`thumbnail-${id}`}
            title='spoiler-icon'
            src={spoilerIcon}
            className='thumbnail thumbnail-substitute'
          ></img>
        );
      } else if (["default", "self", ""].includes(thumbnail)) {
        return (
          <img
            alt='thumbnail'
            id={`thumbnail-${id}`}
            title='text-icon'
            src={textIcon}
            className='thumbnail thumbnail-substitute'
          ></img>
        );
      } else {
        return (
            <img
              alt='thumbnail'
              id={`thumbnail-${id}`}
              title={thumbnail}
              src={thumbnail}
              className='thumbnail'
            ></img>
        );
      }
  };


  return (

    <div className='thumbnail-container'>
      { (media) &&
        <div 
          className={`preview-image-button preview-${media}-button-open`}
          id={`thumbnail-container-${thisThumbnailId}`}
          type='button' 
          onClick={togglePreview}
        >
        </div>
      }

      {thumbnailExists(
      props.topicData.thumbnail,
      props.topicData.media !== null &&
        props.topicData.media.reddit_video
          ? props.topicData.media.reddit_video.fallback_url
          : props.topicData.url,
        props.topicData.id
      )}

    </div>
  );
}

export default ThumbnailContainer;