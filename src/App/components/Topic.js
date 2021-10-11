import React from 'react'
import CommentList from './CommentList';
import ReactHtmlParser from "react-html-parser";
import { useState } from "react";
import textIcon from "../../Style/text-icon-2.png";
import nsfwIcon from "../../Style/nsfw-icon-2.png";

// import upArrow from "../../Style/up-arrow.png";
// import downArrow from "../../Style/down-arrow.png";
// import upArrowUpvoted from "../../Style/up-arrow-upvoted.png";
// import downArrowDownvoted from "../../Style/down-arrow-downvoted.png";
// import arrows from "../../Style/arrows.png";



function Topic(props) {
  const [count, setCount] = useState(props.topicData.ups);

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

  let thumbnailToggler = false;
  function toggleThumbnail(event) {
    if (!thumbnailToggler) {
      // document.getElementById(
      //   `thumbnail-${props.topicData.id}`
      // ).src = `${props.topicData.url_overridden_by_dest}`;
      document.getElementById(
        `thumbnail-${props.topicData.id}`
      ).style.maxWidth = "700px";
      document.getElementById(
        `thumbnail-${props.topicData.id}`
      ).style.maxHeight = "700px";
    } else {
      // document.getElementById(
      //   `thumbnail-${props.topicData.id}`
      // ).src = `${props.topicData.thumbnail}`;
      document.getElementById(
        `thumbnail-${props.topicData.id}`
      ).style.maxWidth = "70px";
      document.getElementById(
        `thumbnail-${props.topicData.id}`
      ).style.maxHeight = "70px";
    }
    thumbnailToggler = !thumbnailToggler;
  }

  // Function to toggle Upvote
  function toggleUpArrow(event) {
    if (
      document.getElementById(event.target.id).getAttribute("alt") ===
      "up-arrow"
    ) {
      if (
        document.getElementById(
          `topic-score-${event.target.attributes.topicid.nodeValue}`
        ).style.color === "rgb(51, 102, 153)"
      ) {
        document.getElementById(
          `topic-score-${event.target.attributes.topicid.nodeValue}`
        ).style.color = "black";
        setCount(count + 2);
      } else {
        setCount(count + 1);
      }

      document.getElementById(event.target.id).classList.remove("up-arrow");
      document
        .getElementById(event.target.id)
        .classList.add("up-arrow-upvoted");
      document
        .getElementById(event.target.id)
        .setAttribute("alt", "up-arrow-upvoted");

      document.getElementById(
        `topic-score-${event.target.attributes.topicid.nodeValue}`
      ).style.color = "#ff4500";
      document
        .getElementById(
          `down-arrow-${event.target.attributes.topicid.nodeValue}`
        )
        .classList.remove("down-arrow-downvoted");
      document
        .getElementById(
          `down-arrow-${event.target.attributes.topicid.nodeValue}`
        )
        .classList.add("down-arrow");
      document
        .getElementById(
          `down-arrow-${event.target.attributes.topicid.nodeValue}`
        )
        .setAttribute("alt", "down-arrow");
    } else {
      document
        .getElementById(event.target.id)
        .classList.remove("up-arrow-upvoted");
      document.getElementById(event.target.id).classList.add("up-arrow");
      document.getElementById(event.target.id).setAttribute("alt", "up-arrow");
      document.getElementById(
        `topic-score-${event.target.attributes.topicid.nodeValue}`
      ).style.color = "black";
      setCount(count + -1);
    }
  }

  // Function to toggle Downvote
  function toggleDownArrow(event) {
    if (
      document.getElementById(event.target.id).getAttribute("alt") ===
      "down-arrow"
    ) {
      if (
        document.getElementById(
          `topic-score-${event.target.attributes.topicid.nodeValue}`
        ).style.color === "rgb(255, 69, 0)"
      ) {
        document.getElementById(
          `topic-score-${event.target.attributes.topicid.nodeValue}`
        ).style.color = "black";
        setCount(count - 2);
      } else {
        setCount(count - 1);
      }

      document.getElementById(event.target.id).classList.remove("down-arrow");
      document
        .getElementById(event.target.id)
        .classList.add("down-arrow-downvoted");
      document
        .getElementById(event.target.id)
        .setAttribute("alt", "down-arrow-downvoted");

      document.getElementById(
        `topic-score-${event.target.attributes.topicid.nodeValue}`
      ).style.color = "#369";
      document
        .getElementById(`up-arrow-${event.target.attributes.topicid.nodeValue}`)
        .classList.remove("up-arrow-upvoted");
      document
        .getElementById(`up-arrow-${event.target.attributes.topicid.nodeValue}`)
        .classList.add("up-arrow");
      document
        .getElementById(`up-arrow-${event.target.attributes.topicid.nodeValue}`)
        .setAttribute("alt", "up-arrow");
    } else {
      document
        .getElementById(event.target.id)
        .classList.remove("down-arrow-downvoted");
      document.getElementById(event.target.id).classList.add("down-arrow");
      document
        .getElementById(event.target.id)
        .setAttribute("alt", "down-arrow");
      document.getElementById(
        `topic-score-${event.target.attributes.topicid.nodeValue}`
      ).style.color = "black";
      setCount(count + 1);
    }
  }

  return (
    <div className='whole-topic-container'>
      <div className='arrows-container'>
        <div
          className='up-arrow arrow'
          alt='up-arrow'
          onClick={toggleUpArrow}
          id={`up-arrow-${props.subreddit}-${props.dataKey}`}
          topicid={`${props.subreddit}-${props.dataKey}`}
        ></div>
        <div
          className='topic-score'
          id={`topic-score-${props.subreddit}-${props.dataKey}`}
        >
          {count}
        </div>
        <div
          className='down-arrow arrow'
          data-alt='down-arrow'
          alt='down-arrow'
          onClick={toggleDownArrow}
          id={`down-arrow-${props.subreddit}-${props.dataKey}`}
          topicid={`${props.subreddit}-${props.dataKey}`}
        ></div>
      </div>

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

            <div className='thumbnail-container'>
              <button onClick={toggleThumbnail}>X</button>
              {thumbnailExists(
                props.topicData.thumbnail,
                props.topicData.media !== null &&
                  props.topicData.media.reddit_video
                  ? props.topicData.media.reddit_video.fallback_url
                  : props.topicData.url,
                props.topicData.id
              )}
            </div>
          </div>

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
