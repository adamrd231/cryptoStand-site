import { useState } from 'react'
import './App.css'
import { Container, RowContainer } from '../src/Components/Layouts'
import styled from '@emotion/styled'


function App() {

  return (
    <Container>
      <h1>Crypto Stand</h1>
      <p>Free app available now on the app store.</p>
      <p>Test your day-trader skills by participating in the cryptocurrency market.</p>
      <p>Challenge your friends</p>
      <p>Learn about cryptocurrency</p>
      <p>Prove you are the best (without having to spend money)</p>
      <RowContainer>
        <button>App Store</button>
        <button>Contact me</button>
      </RowContainer>
     

    </Container>
  )
}

export default App
