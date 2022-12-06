import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Navbar>
      <Logo>
        { 'Tag \'Em All' }
      </Logo>
      <NavContainer>
        <NavLink>
          <StyledLink to="/">
            { 'Home' }
          </StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink to="/levels">
            { 'Levels' }
          </StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink to="/leaderboard">
            { 'Leaderboards' }
          </StyledLink>
        </NavLink>
      </NavContainer>
    </Navbar>
  );
};

const Logo = styled.h1`
  font-weight: normal;
  font-family: 'vogue', sans-serif;
  font-size: 3rem; 
  margin-top: 10px;
  letter-spacing: 5px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  height: 10vh;
  @media(max-width: 700px) {
    height: 20vh;
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
`;

const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  padding: 10px 20px;
  transition: 0.3s ease-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  }
`;

export default Header;
