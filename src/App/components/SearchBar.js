import React from 'react'
import * as RedditAPI from '../RedditAPI';
import { useSelector, useDispatch } from 'react-redux';

function SearchBar(props) {

  // Redux State/Action Management.
  const searchItem = useSelector((state) => state.searchItem.value);
  const dispatch = useDispatch();



  const handleKeyPress = (event) => {
      if (event.key === "Enter") {
          event.preventDefault();
          dispatch(RedditAPI.setSearchItem(''))
      };
  }

  const handleTextChange = (event) => {
    dispatch(RedditAPI.setSearchItem(event.target.value));
  }


  return (
        <div className='search-bar'>
          <i className="fa fa-search search-icon"></i>
          <form 
            className="search-form"
            action="" 
          >
            <input 
              type="text" 
              id="search-input" 
              placeholder="Search Subreddit..." 
              name="search"
              onChange={handleTextChange}
              value={searchItem}
              onKeyPress={handleKeyPress}
            >
            </input>
        </form>
        </div>
  );
}

export default SearchBar;