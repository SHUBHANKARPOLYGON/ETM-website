import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/assets/hero-bg.jpg') no-repeat center center/cover;
  color: #fff;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const HeroSubTitle = styled.p`
  font-size: 1.5rem;
`;

const Home = () => {
  return (
    <HeroSection>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroTitle>Welcome to Elecric Auto Motive</HeroTitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <HeroSubTitle>Your electric vehicle journey starts here.</HeroSubTitle>
      </motion.div>
    </HeroSection>
  );
};

export default Home;
