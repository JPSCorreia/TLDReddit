import React from 'react'
import Markdown from "markdown-to-jsx";


function CommentHead(props) {

  return (
    <div className="comment-head" id={`comment-head-${props.topicId}-${props.dataKey}`}>
      <div className='comment-body'><Markdown>{props.topicData.selftext}</Markdown></div>
    </div>
  );
}

export default CommentHead;