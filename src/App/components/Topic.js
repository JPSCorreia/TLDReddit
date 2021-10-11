import React from 'react'
import CommentList from './CommentList';
import ReactHtmlParser from "react-html-parser";
import upArrow from "../../Style/up-arrow.png";
import downArrow from "../../Style/down-arrow.png";
import upArrowUpvoted from "../../Style/up-arrow-upvoted.png";
import downArrowDownvoted from "../../Style/down-arrow-downvoted.png";
import { useState } from "react";
import textIcon from "../../Style/text-icon.png";
import nsfwIcon from "../../Style/nsfw-icon.png";

// Function that searchs for thumbnail, it adds a text thumbnail or nsfw thumbnail for posts of those types.
const thumbnailExists = (thumbnail, id) => {
  //console.log(`thumbnail is ${thumbnail} with id ${id}`)
  if (["default", "self", ""].includes(thumbnail)) {
    return (
      <img
        alt="thumbnail"
        id={`thumbnail-${id}`}
        title="text-icon"
        src={textIcon}
        className="thumbnail"
      ></img>
    );
  } else if (["nsfw"].includes(thumbnail)) {
    return (
      <img
        alt="thumbnail"
        id={`thumbnail-${id}`}
        title="nsfw-icon"
        src={nsfwIcon}
        className="thumbnail"
      ></img>
    );
  } else {
    return (
      <img
        alt="thumbnail"
        id={`thumbnail-${id}`}
        title={thumbnail}
        src={thumbnail}
        className="thumbnail"
      ></img>
    );
  }
};
function Topic(props) {
  const [count, setCount] = useState(props.topicData.ups);

  // const resizeThumbnail = () => {
  //   document.getElementById(`thumbnail-${props.topicData.id}`).src='';
  // }

  // Function to toggle Upvote
  function toggleUpArrow(event) {
    if (document.getElementById(event.target.id).alt === "up-arrow") {
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
      document.getElementById(event.target.id).src = upArrowUpvoted;
      document.getElementById(event.target.id).alt = "up-arrow-upvoted";
      document.getElementById(
        `topic-score-${event.target.attributes.topicid.nodeValue}`
      ).style.color = "#ff4500";
      document.getElementById(
        `down-arrow-${event.target.attributes.topicid.nodeValue}`
      ).src = downArrow;
      document.getElementById(
        `down-arrow-${event.target.attributes.topicid.nodeValue}`
      ).alt = "down-arrow";
    } else {
      document.getElementById(event.target.id).src = upArrow;
      document.getElementById(event.target.id).alt = "up-arrow";
      document.getElementById(
        `topic-score-${event.target.attributes.topicid.nodeValue}`
      ).style.color = "black";
      setCount(count + -1);
    }
  }

  // Function to toggle Downvote
  function toggleDownArrow(event) {
    if (document.getElementById(event.target.id).alt === "down-arrow") {
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
      document.getElementById(event.target.id).src = downArrowDownvoted;
      document.getElementById(event.target.id).alt = "down-arrow-upvoted";
      document.getElementById(
        `topic-score-${event.target.attributes.topicid.nodeValue}`
      ).style.color = "#369";
      document.getElementById(
        `up-arrow-${event.target.attributes.topicid.nodeValue}`
      ).src = upArrow;
      document.getElementById(
        `up-arrow-${event.target.attributes.topicid.nodeValue}`
      ).alt = "up-arrow";
    } else {
      document.getElementById(event.target.id).src = downArrow;
      document.getElementById(event.target.id).alt = "down-arrow";
      document.getElementById(
        `topic-score-${event.target.attributes.topicid.nodeValue}`
      ).style.color = "black";
      setCount(count + 1);
    }
  }

  return (
    <div className="topic-arrows-container">
      <div className="arrows-container">
        <img
          className="arrow"
          alt="up-arrow"
          src={upArrow}
          onClick={toggleUpArrow}
          id={`up-arrow-${props.subreddit}-${props.dataKey}`}
          topicid={`${props.subreddit}-${props.dataKey}`}
        ></img>
        <div
          className="topic-score"
          id={`topic-score-${props.subreddit}-${props.dataKey}`}
        >
          {count}
        </div>
        <img
          className="arrow"
          alt="down-arrow"
          src={downArrow}
          onClick={toggleDownArrow}
          id={`down-arrow-${props.subreddit}-${props.dataKey}`}
          topicid={`${props.subreddit}-${props.dataKey}`}
        ></img>
      </div>
      <div
        className="topic"
        topic-id={props.topicData.id}
        id={`${props.subreddit}-${props.dataKey}`}
      >
        <div className="topic-and-thumbnail">
          <div className="topic-name">
            <b>{ReactHtmlParser(props.topicData.title)}</b>
          </div>

          <div className="thumbnail-container">
            {/* <button type='button' className='resize-image-button'></button> */}
            {thumbnailExists(props.topicData.thumbnail, props.topicData.id)}
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
  );
}

export default Topic;
