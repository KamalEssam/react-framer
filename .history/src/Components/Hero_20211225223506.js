import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`; 
function Hero() {
    return (
        <Section >
            
        </Section>
    )
}

export default Hero

