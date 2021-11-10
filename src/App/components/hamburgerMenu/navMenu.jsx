import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


const SubButton = styled(motion.li)``;


const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

export function NavMenu({ isOpen, toggle }) {

  const routes = useSelector((state) => state.routes.data);

  const subredditBarList = [];
  routes.forEach((subreddit, index) => {
    const id = `subreddit-button-${subreddit.substr(3)}-${index}`
    subredditBarList.push(
      <SubButton
        className='mobile-sub-button'
        initial={false}
        animate={isOpen ? "show" : "hide"}
        variants={{
          show: {
            ...variants.show,
            transition: { delay: 0.5, duration: 0.2 },
          },
          hide: {
            ...variants.hide,
            transition: { delay: 0.15, duration: 0.05 },
          },
        }}
      >
        <NavLink
          to={subreddit.substr(3)}
          className='subreddit-button' 
          id={id} 
          key={index}
          onClick={toggle}
        >
          {subreddit.substr(3)}
        </NavLink>
      </SubButton>
    )
  })



  return (
    <div className='mobile-navbar-navmenu-container'>
      <ul className='mobile-navbar-navlist' >
      {subredditBarList}
      </ul>
    </div>
  );
}





