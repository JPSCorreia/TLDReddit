import React from 'react'
import { useSelector } from "react-redux";


function SideInfo(props) {

  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);


  return (
    <div
      className='side-info'
    >
      <div className='sidebar-subreddit-name'>
        {selectedSubreddit.substr(2)}
      </div>
      <div className='subreddit-sidebar-info'>
        Subreddit Information:
        Blablabla Blablablablablal albaldalsdas ldasld aslda lda asldasl dasdla sdlasdla d
      </div>
    </div>
  );
}

export default SideInfo;
