import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PlanetOne from '../images/planet.svg';
import PlanetTwo from '../images/planet-2.svg';
import PlanetThree from '../images/planet-3.svg';
import PlanetFour from '../images/planet-4.svg';

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
const ColumnLeft = styled.div`
  color  : #fff ;
  display : flex ;
  flex-direction: column ;
  justify-content: center;
  align-items: flex-Start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

const ColumnRight = styled.div`
  color  : #fff ;
  display : flex 
`;

// const Button = styled.div`
//   color  : #fff ;
//   display : flex 
// `;



function Hero() {
    return (
        <Section >
            <Container>
                <ColumnLeft>
                    <h1> Hello </h1>
                    <p> Hello 2</p>
                    <Button> Get Start</Button>
                </ColumnLeft>
                <ColumnRight>
                    filler
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Hero

