import React from 'react'
import SearchBar from './SearchBar';
import SideInfo from './SideInfo';


function SideBar(props) {

  return (
    <div
      className='side-bar'
    >
    <SearchBar />
    <SideInfo />
    </div>
  );
}

export default SideBar;
