import React from 'react'



function ImagePreview(props) {
  return (

    <div className='preview-image'>
      <a href={props.url} target='_blank' rel='noreferrer'>
      <img
        alt={`${props.id}-preview`}
        src={props.src}
      ></img>
      </a>
    </div>
  );
}

export default ImagePreview;
