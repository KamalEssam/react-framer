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
const ColumnLeft = styled.div`
  color  : #fff ;
  display : flex ;
  flex-direc
`; 
const ColumnRight = styled.div`
  color  : #fff ;
  display : flex 
`; 

const Button = styled.div`
  color  : #fff ;
  display : flex 
`; 



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

                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Hero

