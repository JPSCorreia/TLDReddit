// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import * as RedditAPI from '../RedditAPI';


// function PageChanger(props) {

//   const dispatch = useDispatch();

//   const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);

//   const topicList = useSelector((state) => state.topicList[selectedSubreddit] || [])


  

//   function handleSubredditAfter (event) {
//     const nextPage = `https://www.reddit.com/${selectedSubreddit}.json?count=25&after=${topicList.after}`
//     dispatch(RedditAPI.getTopicListAfter(nextPage));
//   }

//   function handleSubredditBefore (event) {
//     const previousPage = `https://www.reddit.com/${selectedSubreddit}.json?count=25&after=${topicList.before}`
//     dispatch(RedditAPI.getTopicListBefore(previousPage));
//   }


//   return (
//     <div className="page-changer">
//       <div 
//       className='preview-image-button preview-image-button-open' 
//       type='button' 
//       onClick={handleSubredditBefore}
//       >
//       </div>
//       <div 
//       className='preview-image-button preview-image-button-close' 
//       type='button' 
//       onClick={handleSubredditAfter}
//       >
//       </div>
//     </div>
//   );
// }

// export default PageChanger;