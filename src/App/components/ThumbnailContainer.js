import React from 'react'
import textIcon from "../../Style/text-icon-larger.png";
import nsfwIcon from "../../Style/nsfw-icon-larger.png";
import spoilerIcon from "../../Style/spoiler-alert.png";
import noPreviewIcon from "../../Style/no-preview-icon.png";
import { useSelector, useDispatch } from 'react-redux';
import * as RedditAPI from '../RedditAPI';


function ThumbnailContainer(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const thisThumbnailId = `${props.subreddit}-${props.dataKey}`;
  const previewImageShowing = useSelector((state) => state.previewImage[thisThumbnailId]);
  

// Event handler for toggling showing preview image.
  function togglePreview() {
    console.log(`Image preview on topic ${thisThumbnailId} to: ${previewImageShowing? 'hide' :'show'}`)
    dispatch(RedditAPI.preview(thisThumbnailId))
    if (!previewImageShowing) {
      document.getElementById(`thumbnail-container-${thisThumbnailId}`).classList.remove('preview-image-button-open');
      document.getElementById(`thumbnail-container-${thisThumbnailId}`).classList.add('preview-image-button-close');
    } else {
      document.getElementById(`thumbnail-container-${thisThumbnailId}`).classList.remove('preview-image-button-close');
      document.getElementById(`thumbnail-container-${thisThumbnailId}`).classList.add('preview-image-button-open');
    }
  }


  // Function that searchs for thumbnail, it adds a text thumbnail or nsfw thumbnail for posts of those types.
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
          <a href={url} target='_blank' rel='noreferrer'>
            <img
              alt='thumbnail'
              id={`thumbnail-${id}`}
              title={thumbnail}
              src={thumbnail}
              className='thumbnail'
            ></img>
          </a>
        );
      }
  };


  return (
<div className='thumbnail-container'>
  {/*
  //todo: Temporary, have to implement gallery feature.
  */}
  <div>
    {props.topicData.is_gallery? `TEMP ${props.topicData.gallery_data.items.length} items` : ''}
  </div>
    {/* Check to see if its image or video/gif */}
    {(['image', 'hosted:video', 'rich:video'].includes(props.topicData.post_hint) || props.topicData.domain.includes("gfycat.com") || props.topicData.domain.includes("twitch.tv") || props.topicData.domain.includes("imgur.com")) && <div 
      className='preview-image-button preview-image-button-open' 
      id={`thumbnail-container-${thisThumbnailId}`}
      type='button' 
      onClick={togglePreview}
    >
    </div>}
  {thumbnailExists(
    props.topicData.thumbnail,
    props.topicData.media !== null &&
      props.topicData.media.reddit_video
        ? props.topicData.media.reddit_video.fallback_url
        : props.topicData.url,
      props.topicData.id
    )}</div>
);
}

export default ThumbnailContainer;