import './App.css'
import { Container, RowContainer, ColumnContainer } from '../src/Components/Layouts'
import styled from '@emotion/styled'
import AppImage from '../src/assets/screenshot.png'
import Menu from './Views/Menu'
import BackgroundImage from './assets/cryptoBackground.webp'
import QR from './assets/qr.png'

const Subheading = styled.div`
  color: green;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
`;

const LandingContainer = styled.div`
  padding: 3rem;
  min-width: 40%;
  margin: 0;
`;

const LandingText = styled.div`
  font-size: 1.1rem;
  margin: 0.25rem;
`;

const TextButton = styled.button`
  background: transparent;
`;

const LandingImage = styled.img`
  width: 15rem;
  margin: auto;
`;


const Background = styled.img`
    position: absolute;
    z-index: -1;
    opacity: 0.1;
    width: 100%;

`;



function App() {

  return (
    <Container>
      <Background src={BackgroundImage} />
      <Menu />
      <RowContainer justify='space-between'>
        <LandingContainer>
          <Subheading>Mobile app for cryptocurrency education</Subheading>
          <h1>Can you make money with Crypto?</h1>
          <LandingText>Put your day-trading skills to the test with Crypto Stand, no real money required.</LandingText>
          <RowContainer padding='0rem'>
            <button>App store</button>
            <TextButton>Contact</TextButton>
          </RowContainer>
          
        </LandingContainer>
        <ColumnContainer>
          <LandingImage src={AppImage} />
        </ColumnContainer>
      </RowContainer>
      
      <RowContainer background={'white'}>

        <h2>Hello</h2>
        <LandingImage src={QR} />

      </RowContainer>
     

    </Container>
  )
}

export default App
