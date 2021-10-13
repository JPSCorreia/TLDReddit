import React from 'react'



function ImagePreview(props) {
  const thisImageId = `${props.subreddit}-${props.dataKey}`;
  return (

    <div className='preview-image'>
      <a href={props.topicData.url} target='_blank' rel='noreferrer'>
      <img
        alt={`${thisImageId}-preview`}
        src={props.topicData.url}
      ></img>
      </a>
    </div>
  );
}

export default ImagePreview;
