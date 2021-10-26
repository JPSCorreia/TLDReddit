import React from 'react'
import path from "path";
import ReactPlayer from "react-player";


function ImagePreview(props) {

  // Get extension and URL without extension from data.
  const extension = path.extname(props.topicData.url);
  const imageWithoutExtension = extension ? props.topicData.url.split(extension).shift() : props.topicData.url
  const thisImageId = `${props.subreddit}-${props.dataKey}`;
  
  return (
    
    <div className='preview-image'>
      <a href={props.topicData.domain === 'v.redd.it'? props.topicData.secure_media.reddit_video.fallback_url : props.topicData.url} target='_blank' rel='noreferrer' className='preview-image-link'>

      {/* In URLs with gifv extension try to substitute for webm or mp4.*/}
      { extension === ".gifv" && (
        <video preload="auto" autoPlay loop="loop" className="video-preview">
          <source src={`${imageWithoutExtension}.webm`} type="video/webm"></source>
          <source src={`${imageWithoutExtension}.mp4`} type="video/mp4"></source>
        </video>)
      }

      {/* URLs with webm or mp4 extension.*/}
      { (extension === ".mp4" || extension === ".webm") && (
        <video preload="auto" autoPlay loop="loop" className="video-preview">
          <source src={`${imageWithoutExtension}.webm`} type="video/webm"></source>
          <source src={`${imageWithoutExtension}.mp4`} type="video/mp4"></source>
        </video>)
      }

      {/* Gfycat.com rules for gifs (get case sensitive URL from thumbnail info, hack the string and try different extensions).  */}
      { props.topicData.domain === 'gfycat.com' && (
         <video preload="auto" autoPlay loop="loop" className="video-preview">
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
         <video preload="auto" autoPlay loop="loop" className="video-preview">
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

      {/* youtube embed */}
      { props.topicData.media && props.topicData.media.type.includes('youtube.com') &&
      // <YoutubeEmbed url={props.topicData.url} />
        <ReactPlayer
          playing
          url={props.topicData.url}
          controls={true}
          volume={1}
          muted={true} // autoplay must be muted by default since chrome 66.
          autoPlay={true}
        />
      }
  
      {/* streamable embed */}
      { props.topicData.media && props.topicData.media.type && props.topicData.media.type.includes('streamable.com') &&
        <ReactPlayer
          playing
          url={props.topicData.url}
          controls={true}
          volume={1}
          muted={true} // autoplay must be muted by default since chrome 66.
          autoPlay={true}
        />
      }

      {/* streamable embed */}
      { props.topicData.media && props.topicData.media.type && props.topicData.media.type.includes('twitch.tv') &&
        <ReactPlayer
          playing
          url={props.topicData.url}
          controls={true}
          volume={1}
          muted={true} // autoplay must be muted by default since chrome 66.
          autoPlay={true}
        />
      }
      </a>
    </div>
  );
}

export default ImagePreview;

