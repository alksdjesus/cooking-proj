import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  background: orange;
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  justify-content: flex-start;
`;

export const NavLink = styled(Link)`
  font-color: #000;
  font-size: 2.25vh;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.6rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Alexandria', sans-serif;
  font-weight: 400;
  //transition: all 0.2s ease-in-out;
  &.active {
    //font-weight: 700;
    //background: #e69500;
    //transition: all 0.2s ease-in-out;
    border-bottom: 2.5px solid black;
    height: 88%;
    margin-top: 2.5px;
  }
  &:hover {
    //transition: all 0.2s ease-in-out;
    text-decoration: none;
    //background: #e69500;
  }
`;

export const NavTitle = styled(Link)`
  color: #000;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0rem;
  padding-right: 4%;
  height: 100%;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-left: 3.75%;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 3%;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  color: #000;
  border-radius: 4px;
  padding: 10px 22px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
  }
`;

export const RecipeBtn = styled(Link)`
  background-color: '#000';
  border-radius: 10;
  padding: 20;
  margin-vertical: 10;
  margin-horizontal: 20;
  margin-top: 90;
`;

export const SaveButton = styled.button`
  background-color: white;
  color: black;
  font-family: Alexandria, sans-serif;
  font-weight: 400;
  width: auto;
  font-size: 17px;
  padding: 8px 12px;
  border-radius: 10px;
  border-width: 2px;
  border-color: black;
  outline: none;
  border-style: solid;
  margin: 0px 0px 30px 0px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: black;
    color: white;
  }
`;

export const Recipe = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RecipeLink = styled(Link)`
  color: #000;
  border-radius: 4px;
  background: #fff;
  padding: 10px 22px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
  }
`;