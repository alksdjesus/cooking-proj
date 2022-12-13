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
          <img src={require('../images/logo1.png')} alt='logo' height="23" />
        </NavTitle>
        <NavMenu>
          <NavLink to='/feed' activeStyle>
            Feed
          </NavLink>
          <NavLink to='/search' activeStyle>
            Search
          </NavLink>
          <NavLink to='/saved' activeStyle>
            Saved
          </NavLink>
          <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;