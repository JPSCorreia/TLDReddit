import React from 'react'
import textIcon from "../../Style/text-icon-2.png";
import nsfwIcon from "../../Style/nsfw-icon-2.png";
import { useSelector, useDispatch } from 'react-redux';
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';


function ThumbnailContainer(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  useEffect(() =>  {
    dispatch(RedditAPI.previewImage(props.id));
  }, [dispatch, props.id]); 
  const previewImageShowing = useSelector((state) => state.selectedTopic[props.id]);



// Event handler for toggling showing preview image.
  function togglePreview() {
    console.log(`toggling image preview on topic ${props.id} to: ${previewImageShowing}`)
    dispatch(RedditAPI.previewImage(props.id))
    if (!previewImageShowing) {
      document.getElementById(`thumbnail-container-${props.id}`).classList.remove('preview-image-button-open');
      document.getElementById(`thumbnail-container-${props.id}`).classList.add('preview-image-button-close');
    } else {
      document.getElementById(`thumbnail-container-${props.id}`).classList.remove('preview-image-button-close');
      document.getElementById(`thumbnail-container-${props.id}`).classList.add('preview-image-button-open');
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
              {/* //Temporary, To do gallery specific.*/}
            <div>{props.topicData.is_gallery? `TEMPORARY Gallery with ${props.topicData.gallery_data.items.length} items` : ''}</div>
              {props.topicData.post_hint === 'image' && <div 
              className='preview-image-button preview-image-button-open' 
              id={`thumbnail-container-${props.id}`}
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
              )}
</div>
  );
}

export default ThumbnailContainer;