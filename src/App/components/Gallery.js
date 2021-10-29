import React from 'react'
import he from 'he';


function Gallery(props) {

  const thisImageId = `${props.subreddit}-${props.dataKey}`;

  // Get image gallery data.
  const galleryIds = [];
  const galleryImages = []
  const galleryImgs = [];
  if (props.topicData.gallery_data) {
    props.topicData.gallery_data.items.forEach( (element,index) => {
      
      // Array of IDs for each image.
      galleryIds.push(element.media_id)

      // Array of URLs for each image.
      galleryImages.push(he.decode(props.topicData.media_metadata[element.media_id].s.u))

      // Array of <img> elements for each image.
      galleryImgs.push(
        <img
          alt={`${thisImageId}-${index}-preview`}
          key={index}
          src={galleryImages[index]}
        />
      ) 
    })
  }

  return (
    <div className='image-preview-gallery'>
      {galleryImgs}
    </div>
  );
}

export default Gallery;