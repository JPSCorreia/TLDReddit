import React from 'react'



function ImagePreview(props) {
  return (
    <div className='preview-image'>
      <img
        alt={`${props.id}-preview`}
        src={props.src}
      ></img>
    </div>
  );
}

export default ImagePreview;
