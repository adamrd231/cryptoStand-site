import './App.css'
import { Container, RowContainer, ColumnContainer } from '../src/Components/Layouts'
import styled from '@emotion/styled'
import AppImage from '../src/assets/screenshot.png'
import Menu from './Views/Menu'
import BackgroundImage from './assets/cryptoBackground.webp'
import QR from './assets/qr.png'
import Stars from './Components/Stars'

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
    object-fit: cover;
    max-width: 100%;
    filter: blur(3px);
    height: 100%;

`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  color: black;
  gap: 1rem;
`;

const CallToActionText = styled.div`
  margin: 0;
`;

const FooterItems = styled.div`
  font-size: 0.6rem;
  font-weight: 700;
`;

function App() {

  return (
    <Container>
      <Background src={BackgroundImage} />
      <Menu />
      <RowContainer align='top' justify='space-between'>
        <LandingContainer>
          <Subheading>Mobile app for cryptocurrency education</Subheading>
          <h1>Can you make money with Crypto?</h1>
          <LandingText>Put your day-trading skills to the test with Crypto Stand, no real money required.</LandingText>
          <RowContainer padding='0rem'>
          <a href="https://apps.apple.com/us/app/crypto-stand/id1608452177?itsct=apps_box_badge&amp;itscg=30200" >
            <button>App store</button>
          </a>
            <TextButton>Contact</TextButton>
          </RowContainer>
          
        </LandingContainer>
        <ColumnContainer>
          <LandingImage src={AppImage} />
        </ColumnContainer>
      </RowContainer>
      
      <ColumnContainer background={'white'}>
        
        <BottomContainer>
          <CallToActionText>Five star rating on the app store</CallToActionText>
          <Stars />
        </BottomContainer>
        <a 
          href="https://apps.apple.com/us/app/crypto-stand/id1608452177?itsct=apps_box_badge&amp;itscg=30200" 
          style={{display: 'inline-block', overflow: 'hidden', borderRadius: '13px', width: 'fit-content', height: 'auto', margin: '1rem auto'}}>
            <img 
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1644192000" 
              alt="Download on the App Store" 
              style={{borderRadius: '13px', width: '200px', height: '75px'}} />

        </a>


      </ColumnContainer>

      <RowContainer color="#efefef" background="#1a1a1a">
        <FooterItems>rdConcepts</FooterItems>
        <FooterItems>adam@rdconcepts.design</FooterItems>
        <FooterItems>privacy</FooterItems>
        <FooterItems>terms</FooterItems>
      </RowContainer>

     

    </Container>
  )
}

export default App
