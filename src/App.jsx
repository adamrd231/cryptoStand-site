import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container } from '../src/Components/Layouts'
import styled from '@emotion/styled'

const AppStoreButton = styled.button`
  
`;


function App() {

  return (
    <Container>
      <h1>Crypto Stand</h1>
      <p>Available now on the app store.</p>
      <p>Test your day-trader skills by participating in the cryptocurrency market.</p>
      <p>Challenge your friends</p>
      <p>Learn about cryptocurrency</p>
      <p>Prove you are the best (without having to spend money)</p>
      <AppStoreButton>App Store</AppStoreButton>

    </Container>
  )
}

export default App
