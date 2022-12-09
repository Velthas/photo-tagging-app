import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import blackSep from '../assets/images/style/bottom-black.svg'

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
  font-family: ${({theme}) => theme.fonts.headers};
  font-size: 2rem; 
  margin: 0 0 10px 0;
  letter-spacing: 5px;

  @media(max-width: 700px) {
    margin-bottom: 0;
  }

  &:after {
    content: "";
    background-image: url(${blackSep});
    position: absolute;
    right: 0;
    bottom: -6px;
    height: 30px;
    width: 100%;
  }
`;

const Navbar = styled.nav`
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${({theme}) => theme.colors.yellow};
  color: ${({theme}) => theme.colors.dark};

  height: 15vh;

  @media(max-width: 700px) {
    height: 15vh;
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;

  color: ${({theme}) => theme.colors.dark};
`;

const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin: 0 0 10px 0;
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
