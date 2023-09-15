import { useState } from 'react'
import './App.css'
import { Container, RowContainer } from '../src/Components/Layouts'
import styled from '@emotion/styled'
import AppImage from '../src/assets/screenshot.png'

const Image = styled.img`
  width: 33%;
`;

function App() {

  return (
    <Container>
      <RowContainer background='green'>
        <div>
        <h2>Download Crypto Stand: practice your day-trading skills now without risk.</h2>
        <p>Star Star Star Star Star on the app store</p>
        <p>Interested in Crypto but not willing to spend your own money? Join Crypto Stand to get into the market</p>
        <p>Challenge your friends</p>
        <p>Learn about cryptocurrency</p>
        <p>Prove you are the best (without having to spend money)</p>
          <RowContainer>
            <button>Download Crypto Stand</button>
            <button>Contact me</button>
          </RowContainer>
        </div>
       
       <Image src={AppImage} />

      </RowContainer>
      
      <RowContainer>
        <h2>Hello</h2>
      </RowContainer>

    </Container>
  )
}

export default App
