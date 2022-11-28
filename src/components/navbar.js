import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavTitle
} from './navbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavTitle to='/'>
          <img src={require('../images/logo.png')} alt='logo' />
        </NavTitle>
        <Bars />
        <NavMenu>
          <NavLink to='/feed' activeStyle>
            FEED
          </NavLink>
          <NavLink to='/search' activeStyle>
            SEARCH
          </NavLink>
          <NavLink to='/saved' activeStyle>
            SAVED
          </NavLink>
          <NavLink to='/settings' activeStyle>
            SETTINGS
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;