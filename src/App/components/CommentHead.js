import React from 'react'
import ReactMarkdown from 'react-markdown'


function CommentHead(props) {

  return (
    <div className="comment-head" id={`comment-${props.topicId}-${props.dataKey}`}>
      <div className='comment-body'><ReactMarkdown>{props.topicData.selftext}</ReactMarkdown></div>
    </div>
  );
}

export default CommentHead;