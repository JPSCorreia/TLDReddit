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

const HamburgerMenuContainer = styled.div`
  display: flex;
`;


const MenuContainer = styled(motion.div)`
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid blue;
`;


const LoginButton = styled(motion.button)`
  border: 0;
  background: transparent;
  color: white;
  font-size: 14px;
  font-weight: 900;
  transition: all 250ms ease-in-out;
  display: flex;
  cursor: pointer;
  padding: 5px 12px;
  margin: auto 0;
  border: 1px solid red;

  &:hover {
    color: #666;
  }

  &:focus {
    outline: none;
  }

  &:not(:last-of-type) {
    border-right: 1px solid #b4b4b4;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  border: 1px solid green;
`;

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

const commonTransition = { type: "spring", duration: 0.05 };



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
    <HamburgerMenuContainer>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        className='mobile-navbar-menu-container'
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <TopContainer>
        {/* <LoginBar 
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariants}
            transition={commonTransition}
        /> */}
          <LoginButton
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariants}
            transition={commonTransition}
          >

            LOGIN
          </LoginButton>
          <LoginButton
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariants}
            transition={commonTransition}
          >
            
              <i className="fa theme-icon fa-moon-o moon-icon" onClick={toggleTheme} id='theme-icon-mobile'></i>
            
          </LoginButton>

        </TopContainer>
        <ContentContainer>
          <NavMenu isOpen={isOpen} />
        </ContentContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  );
}