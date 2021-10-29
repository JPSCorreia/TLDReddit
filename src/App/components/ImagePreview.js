import React from 'react'
import path from "path";
import ReactPlayer from "react-player";
import { Tweet } from 'react-twitter-widgets'
import ReactHtmlParser from "react-html-parser";
import he from 'he';
import Gallery from './Gallery';
// import Iframe from 'react-iframe'


function ImagePreview(props) {

  // Get extension and URL without extension from data.
  const extension = path.extname(props.topicData.url);
  const imageWithoutExtension = extension ? props.topicData.url.split(extension).shift() : props.topicData.url
  const thisImageId = `${props.subreddit}-${props.dataKey}`;



  // Get Twitter Info.
  const TwitterId = (props.topicData.media && props.topicData.media.type && props.topicData.media.type.includes('twitter.com'))? (props.topicData.url.split('/status/').pop()).split('?').shift() : ''


  return (
    <div className='preview'>
      <div className='preview-image'>
        {
        // In URLs with gifv extension try to substitute for webm or mp4.
        ( extension === ".gifv" && (
          <video preload="auto" autoPlay loop="loop" className="video-preview">
            <source src={`${imageWithoutExtension}.webm`} type="video/webm"></source>
            <source src={`${imageWithoutExtension}.mp4`} type="video/mp4"></source>
          </video>)
        ) ||

        // URLs with webm or mp4 extension.
        ( (extension === ".mp4" || extension === ".webm") && (
          <video preload="auto" autoPlay loop="loop" className="video-preview">
            <source src={`${imageWithoutExtension}.webm`} type="video/webm"></source>
            <source src={`${imageWithoutExtension}.mp4`} type="video/mp4"></source>
          </video>)
        ) ||

        // Gfycat.com rules for gifs (get case sensitive URL from thumbnail info, hack the string and try different extensions).
        ( props.topicData.domain === 'gfycat.com' && (
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
        )) ||

        // v.redd.it rules 
        //todo: make audio play and synch with video
        ( props.topicData.domain === 'v.redd.it' && (
          <div>
            <audio 
              id={`${thisImageId}-audio-media`} 
              data-mediagroup={`${thisImageId}-media`} 
              type="audio/mp4"
            >
              <source 
                src={`${props.topicData.url}/DASH_audio.mp4`} 
                playsInline>
              </source>
            </audio>
            <video 
              playsInline 
              controls 
              autoPlay 
              muted 
              // onClick={document.getElementById('audio-media-1').play()} 
              data-mediagroup={`${thisImageId}-media`}
            >
              <source 
                src={props.topicData.secure_media.reddit_video.fallback_url}
                alt={`${thisImageId}-preview`}
              >
              </source>
            </video>
          </div>

          // <video preload="auto" autoPlay loop="loop" className="video-preview" controls>
          //   <source
          //     alt={`${thisImageId}-preview`}
          //     src={props.topicData.secure_media.reddit_video.fallback_url}
          //   >
          //   </source>
          // </video>
        )) ||

        // Normal Gifs / images that are not video but img tags.
        ( extension !== ".gifv" && props.topicData.post_hint === 'image' && (
          <img
            alt={`${thisImageId}-preview`}
            src={props.topicData.url}
          />)
        ) ||

        // Youtube embed.
        ( props.topicData.media && props.topicData.media.type && props.topicData.media.type.includes('youtube.com') &&
          <ReactPlayer
            playing
            url={props.topicData.url}
            controls={true}
            volume={1}
            muted={true} // autoplay must be muted by default since chrome 66.
            autoPlay={true}
          />
        ) ||
        
        // Streamable embed.
        ( props.topicData.media && props.topicData.media.type && props.topicData.media.type.includes('streamable.com') &&
          <ReactPlayer
            playing
            url={props.topicData.url}
            controls={true}
            volume={1}
            muted={true} // autoplay must be muted by default since chrome 66.
            autoPlay={true}
          />
        ) ||

        // Twitch.tv embed.
        ( props.topicData.media && props.topicData.media.type && props.topicData.media.type.includes('twitch.tv') &&
          <ReactPlayer
            playing
            url={props.topicData.url}
            controls={true}
            volume={1}
            muted={true} // autoplay must be muted by default since chrome 66.
            autoPlay={true}
          />
        ) ||

        // Imgur without extension.
        ( extension === "" && props.topicData.domain.includes('imgur.com') && !props.topicData.secure_media && (
          <img
            alt={`${thisImageId}-preview`}
            src={`${props.topicData.url}.jpg`}
          />)
        ) ||

        // Reddit Gallery.
        ( props.topicData.gallery_data && ( 
          <Gallery 
          topicData={props.topicData} 
          subreddit={props.subreddit}
          dataKey={props.dataKey}
          />
            )
        ) || 

        // Other domain galleries.
        ( extension === "" && props.topicData.media_embed &&  props.topicData.media_embed.content && props.topicData.media.type !== 'twitter.com' && ( 
          ReactHtmlParser(he.decode(props.topicData.media_embed.content))
        )) || ''

        }
      </div>

      { props.topicData.media && props.topicData.media.type && props.topicData.media.type.includes('twitter.com') &&
        // Twitter.com embed.
        <div className='preview-tweet'>
          <Tweet
            tweetId={TwitterId}
          />
        </div>
      }

    </div>
  );
}

export default ImagePreview;






// {/* use Iframes when no extension, last recourse, doesn't work well with most websites since they don't permit x-frame-options from other domains */}
// {/* { extension === "" && props.topicData.media && ( 
//   <Iframe 
//     url={props.topicData.url}
//     alt={`${thisImageId}-preview`}
//     width="250px"
//     height="250px"
//     className="iframe-imgur"
//     display="initial"
//     position="relative"
//   />)
// } */}
