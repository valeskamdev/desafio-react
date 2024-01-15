import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/classic-rock">Classic Rock</NavLink>
      <NavLink to="/heavy-metal">Heavy Metal</NavLink>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  width: 35%;
  /* background-color: rgb(235, 122, 78); */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  align-content: center;
  /* border-right: solid 10px; */

  & a {
    height: 33.3333%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    color: black;

    &:hover,
    &:focus {
      background: linear-gradient(to left, black, transparent);
      color: white;
    }

    &.active {
      background-color: black;
      color: white;
    }

    &:first-child.active {
      border-top-left-radius: 8px;
    }

    &:last-child.active {
      border-bottom-left-radius: 8px;
    }
  }
`;

export default Menu;
