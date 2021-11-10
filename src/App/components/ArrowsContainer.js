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
        ).classList.contains('topic-score-downvoted')
      ) {
        document.getElementById(
          `topic-score-${event.target.attributes.topicid.nodeValue}`
        ).classList.remove('topic-score-downvoted')
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
        ).classList.add('topic-score-upvoted')
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
      ).classList.remove('topic-score-upvoted')
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
        ).classList.contains('topic-score-upvoted')
      ) {
        document.getElementById(
          `topic-score-${event.target.attributes.topicid.nodeValue}`
        ).classList.remove('topic-score-upvoted')
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
      ).classList.add('topic-score-downvoted')
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
        ).classList.remove('topic-score-downvoted')
      setCount(count + 1);
    }
  }

  // Format thousands to K
  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
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
          {kFormatter(count)}
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
