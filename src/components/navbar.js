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
          <img src={require('../images/logo1.png')} alt='logo' height="32" />
        </NavTitle>
        <Bars />
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
          <NavLink to='/settings' activeStyle>
            Settings
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'></NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;