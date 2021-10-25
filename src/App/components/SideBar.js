import React from 'react'
import SearchBar from './SearchBar';
import SideInfo from './SideInfo';
import { useSelector } from 'react-redux';


function SideBar(props) {

  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);

  return (
    <div
      className='side-bar'
    >
    <SearchBar />
    { selectedSubreddit !== 'r/all'?
    <SideInfo /> : ''
    }
    </div>
  );
}

export default SideBar;
