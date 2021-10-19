import React from 'react'
import { useState } from "react";


function ArrowsContainer(props) {

  const [count, setCount] = useState(props.topicData.ups);

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
<div className='arrows-container'>
        <div
          className='up-arrow arrow'
          alt='up-arrow'
          onClick={toggleUpArrow}
          id={`up-arrow-${props.topicData.subreddit}-${props.dataKey}`}
          topicid={`${props.topicData.subreddit}-${props.dataKey}`}
        >⇧</div>
        <div
          className='topic-score'
          id={`topic-score-${props.topicData.subreddit}-${props.dataKey}`}
        >
          {count}
        </div>
        <div
          className='down-arrow arrow'
          data-alt='down-arrow'
          alt='down-arrow'
          onClick={toggleDownArrow}
          id={`down-arrow-${props.topicData.subreddit}-${props.dataKey}`}
          topicid={`${props.topicData.subreddit}-${props.dataKey}`}
        >⇩</div>
      </div>
  );
}

export default ArrowsContainer;
