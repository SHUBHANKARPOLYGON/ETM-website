import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; {new Date().getFullYear()} Electric Motive. All Rights Reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
