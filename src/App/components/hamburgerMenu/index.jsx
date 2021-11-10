// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { NavMenu } from "./navMenu";
// import LoginBar from '../LoginBar'
import * as RedditAPI from '../../RedditAPI';
import { useSelector, useDispatch } from 'react-redux';


const MenuContainer = styled(motion.div)``;
const LoginBar = styled(motion.div)``;
const menuVariants = {
  open: {
    transform: "translateX(3%)",
  },
  closed: {
    transform: "translateX(103%)",
  },
};
const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};
const commonVariants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.01,
    },
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};



export function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  function toggleTheme () {
    dispatch(RedditAPI.toggleTheme(!theme))
    if (theme) {
      document.body.classList.add('theme--default')
      document.body.classList.remove('theme--dark')
      document.getElementById('theme-icon-mobile').classList.add('fa-sun-o')
      document.getElementById('theme-icon-mobile').classList.remove('fa-moon-o')
    } else {
      document.body.classList.add('theme--dark')
      document.body.classList.remove('theme--default')
      document.getElementById('theme-icon-mobile').classList.add('fa-moon-o')
      document.getElementById('theme-icon-mobile').classList.remove('fa-sun-o')
    }
  }

  return (
    <div className='mobile-navbar-hamburger-menu-container'>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        className='mobile-navbar-menu-container'
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <div className='mobile-navbar-top-container'>
          <LoginBar 
            className='login-bar'
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariants}
          >
            <form 
              className="input-form"
              id="login-form"
              action="" 
            >
              <i className="fa fa-user user-icon"></i>
              <input 
                type="text" 
                className='login-input'
                placeholder="Username" 
                name="search"
              >
              </input>
              <i className="fa fa-lock lock-icon"></i>
              <input 
                type="text" 
                className='login-input'
                placeholder="Password" 
                name="search"
              >
              </input>
            </form>
            <i className="fa theme-icon fa-moon-o moon-icon" onClick={toggleTheme} id='theme-icon-mobile'></i>
          </LoginBar>
          
        </div>
        <div className='mobile-navbar-content-container'>
          <NavMenu isOpen={isOpen} toggle={toggleMenu} />
        </div>
      </MenuContainer>
    </div>
  );
}