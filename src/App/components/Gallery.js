import React from 'react'
import he from 'he';
import { useState } from "react";

function Gallery(props) {

  const thisImageId = `${props.subreddit}-${props.dataKey}`;
  const [count, setCount] = useState(1);

  // Get image gallery data.
  const galleryIds = [];
  const galleryImages = []

  if (props.topicData.gallery_data) {
    props.topicData.gallery_data.items.forEach( (element,index) => {
      
      // Array of IDs for each image.
      galleryIds.push(element.media_id)

      // Array of URLs for each image.
      galleryImages.push(he.decode(props.topicData.media_metadata[element.media_id].s.u))

    })
  }


  
  function nextImage() {
  
    const previousIndex = galleryImages.findIndex((element) => {
      return element === document.getElementById('gallery-preview').src 
    })

    // console.log(`current src url is: ${document.getElementById('gallery-preview').src}`)
    // console.log(`previousIndex is ${previousIndex} and galleryImages length is ${galleryImages.length}`)

    if (previousIndex+2 > galleryImages.length) {
      document.getElementById('gallery-preview').src = galleryImages[0]
      setCount(1)
    } else {
      document.getElementById('gallery-preview').src = galleryImages[previousIndex+1]
      setCount(previousIndex+2)
    }

  }



  function previousImage() {
  
    const previousIndex = galleryImages.findIndex((element) => {
      return element === document.getElementById('gallery-preview').src 
    })

    // console.log(`current src url is: ${document.getElementById('gallery-preview').src}`)
    // console.log(`previousIndex is ${previousIndex} and galleryImages length is ${galleryImages.length}`)

    if (previousIndex === 0) {
      document.getElementById('gallery-preview').src = galleryImages[galleryImages.length-1]
      setCount(galleryImages.length)
    } else {
      document.getElementById('gallery-preview').src = galleryImages[previousIndex-1]
      setCount(previousIndex)
    }
  }

  return (
    <div className='image-preview-gallery'>
      <div className='gallery-changer'>
        <div className='gallery-arrow-and-name' onClick={previousImage}>
          <div 
            className='gallery-arrow'
          >
            ←
          </div>
          <div>
            prev
          </div>
        </div>
        <div className='gallery-counter'>
          {`${count}/${galleryImages.length}`}
        </div>
        <div className='gallery-arrow-and-name gallery-right-arrow-and-name' onClick={nextImage}>
          <div>
            next
          </div>
          <div 
            className='gallery-arrow gallery-right-arrow ' 
          >
            →
          </div>
        </div>
      </div>
      <img
        alt={`${thisImageId}-preview`}
        src={galleryImages[0]}
        className='gallery-preview'
        id='gallery-preview'
      />
    </div>
  );
}

export default Gallery;