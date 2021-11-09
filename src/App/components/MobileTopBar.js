import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { HamburgerMenu } from "./hamburgerMenu";


function MobileTopBar(props) {

  const routes = useSelector((state) => state.routes.data);


  // Push chosen subreddits to a list.
  const subredditBarList = [];
  routes.forEach((subreddit, index) => {
    const id = `subreddit-button-${subreddit.substr(3)}-${index}`
    subredditBarList.push(
      <NavLink
        to={subreddit.substr(3)}
        className='subreddit-button' 
        id={id} 
        key={index}
      >
        {subreddit.substr(3)}
      </NavLink>
    )
  })

  return (
    <div className='mobile-top-bar'>
        <div className = 'mobile-navbar-container'>
          <HamburgerMenu />
        </div>
    </div>
  );
}

export default MobileTopBar;