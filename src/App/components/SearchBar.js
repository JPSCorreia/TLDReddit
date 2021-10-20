import React from 'react'



function SearchBar(props) {

  // const searchForm = document.getElementById('search-form');
  // const searchButton = document.getElementById('search-button');
  // const searchInput = document.getElementById('search-input');

  return (
        <div className='search-bar'>
          <form class="search-form" action="" >
            <input type="text" id="search-input" placeholder="Search Term..." name="search"></input>
            <button type="submit"><i className="fa fa-search search-button"></i></button>
        </form>
        </div>
  );
}

export default SearchBar;