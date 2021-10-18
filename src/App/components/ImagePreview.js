import React from 'react'
import path from "path";


function ImagePreview(props) {

  // Get extension and URL without extension from data.
  const extension = path.extname(props.topicData.url);
  const imageWithoutExtension = extension ? props.topicData.url.split(extension).shift() : props.topicData.url
  const thisImageId = `${props.subreddit}-${props.dataKey}`;

  return (

    <div className='preview-image'>
      <a href={props.topicData.url} target='_blank' rel='noreferrer'>

      {/* In URLs with gifv extension try to substitute for webm or mp4.*/}
      { extension === ".gifv" && (
        <video preload="auto" autoplay="autoplay" loop="loop" className="video-preview">
          <source src={`${imageWithoutExtension}.webm`} type="video/webm"></source>
          <source src={`${imageWithoutExtension}.mp4`} type="video/mp4"></source>
        </video>)
      }

      {/* Gfycat.com rules for gifs (get case sensitive URL from thumbnail info, hack the string and try different extensions).  */}
      { props.topicData.domain === 'gfycat.com' && (
         <video preload="auto" autoplay="autoplay" loop="loop" className="video-preview">
          <source
            alt={`${thisImageId}-preview`}
            src={`https://giant.gfycat.com/${path.basename(props.topicData.media.oembed.thumbnail_url.split("-size_restricted").shift())}.webm`}
            type="video/webm"
          >
          </source>
          <source
           alt={`${thisImageId}-preview`}
           src={`https://giant.gfycat.com/${path.basename(props.topicData.media.oembed.thumbnail_url.split("-size_restricted").shift())}.mp4`}
           type="video/mp4"
          >
          </source>
          </video>
      )}

      {/* v.redd.it rules */}
      { props.topicData.domain === 'v.redd.it' && (
         <video preload="auto" autoplay="autoplay" loop="loop" className="video-preview">
          <source
            alt={`${thisImageId}-preview`}
            src={props.topicData.secure_media.reddit_video.fallback_url}
          >
          </source>
        </video>
      )}

      {/* Normal Gifs that are not video but img tags. */}
      { extension !== ".gifv" && props.topicData.post_hint === 'image' && (
        <img
          alt={`${thisImageId}-preview`}
          src={props.topicData.url}
        />)
      }

      </a>
    </div>
  );
}

export default ImagePreview;