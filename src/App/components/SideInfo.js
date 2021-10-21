import React from 'react'
import * as RedditAPI from '../RedditAPI';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import ReactHtmlParser from "react-html-parser";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function SideInfo(props) {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);
  useEffect(() =>  {
    dispatch(RedditAPI.getAbout(selectedSubreddit));
}, [dispatch, selectedSubreddit]);
  const about = useSelector((state) => state.about[selectedSubreddit] || [])


  return (
    <div
      className='side-info'
    >
      <div className='sidebar-subreddit-name'>
        {about.display_name}
      </div>
      <div className='sidebar-subreddit-public-description'>
        {/* {about.public_description} */}
      </div>
      <div className='subreddit-sidebar-info'>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {about.description}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default SideInfo;
