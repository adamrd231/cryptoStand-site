import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from '@emotion/styled'

function App() {
  const [count, setCount] = useState(0)

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    min-height: 100vh;
  `;

  return (
    <Container>
      <h1>Crypto Stand</h1>
      <p>Available now on the app store.</p>
      <p>Test your day-trader skills by participating in the cryptocurrency market.</p>
      <p>Challenge your friends</p>
      <p>Learn about cryptocurrency</p>
      <p>Prove you are the best (without having to spend money)</p>
    </Container>
  )
}

export default App
