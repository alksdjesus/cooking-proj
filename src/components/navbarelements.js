import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  background: orange;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  font-color: #fff;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  &.active {
    font-weight: 700;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e69500;
  }
`;

export const NavTitle = styled(Link)`
  color: #000;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;;
  font-weight: 500;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
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
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  color: #fff;
  border-radius: 4px;
  background: #ff0;
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

export const SearchButton = styled.button`
  background-color: #FFA500;
  color: #000;
  font-family: Montserrat_500Medium;
  width: 120px;
  font-size: 18px;
  padding: 10px 10px;
  border-radius: 30px;
  border-width: 0px;
  margin: 10px 0px;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  background-color: #FFA500;
  color: #000;
  font-family: Montserrat_500Medium;
  width: 90px;
  font-size: 18px;
  padding: 10px 10px;
  border-radius: 30px;
  border-width: 0px;
  margin: 10px 0px;
  cursor: pointer;
`;