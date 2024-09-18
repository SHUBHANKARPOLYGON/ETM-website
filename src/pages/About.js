import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const About = () => {
  return (
    <AboutSection>
      <AboutTitle>About Elecric Auto Motive</AboutTitle>
      <AboutText>
        We are committed to providing the best electric vehicle solutions for a sustainable future.
      </AboutText>
    </AboutSection>
  );
};

export default About;
