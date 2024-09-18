import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #000;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.nav`
  a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    color: #f0a500;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Electric Motive</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </HeaderWrapper>
  );
};

export default Header;
