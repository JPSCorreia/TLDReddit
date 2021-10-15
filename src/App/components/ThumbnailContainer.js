import React from 'react'
import textIcon from "../../Style/text-icon-larger.png";
import nsfwIcon from "../../Style/nsfw-icon-larger.png";
import spoilerIcon from "../../Style/spoiler-alert.png";
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
  const thumbnailExists = (thumbnail, url, id) => {
      //console.log(`thumbnail is ${thumbnail} with id ${id}`)
      if (["default", "self", ""].includes(thumbnail)) {
        return (
          <img
            alt='thumbnail'
            id={`thumbnail-${id}`}
            title='text-icon'
            src={textIcon}
            className='thumbnail'
          ></img>
        );
      } else if (["nsfw"].includes(thumbnail)) {
        return (
          <img
            alt='thumbnail'
            id={`thumbnail-${id}`}
            title='nsfw-icon'
            src={nsfwIcon}
            className='thumbnail'
          ></img>
        );
      } else if (["spoiler"].includes(thumbnail)) {
        return (
          <img
            alt='thumbnail'
            id={`thumbnail-${id}`}
            title='spoiler-icon'
            src={spoilerIcon}
            className='thumbnail'
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


  // Get URL extension
  const extension = props.topicData.url.split('.').pop()


  return (
<div className='thumbnail-container'>
  {/* //Temporary, To do gallery specific.*/}
  <div>
    {props.topicData.is_gallery? `TEMPORARY Gallery with ${props.topicData.gallery_data.items.length} items` : ''}
  </div>
    {(props.topicData.post_hint === 'image' || extension === 'gifv' || extension === 'gif' ) && <div 
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