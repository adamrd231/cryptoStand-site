import styled from "@emotion/styled";
import { RowContainer } from "../Components/Layouts";
import LogoImage from '../assets/CryptoLogo.png'

const Logo = styled.img`
  height: 3rem;
  width: 3rem;
  background: #1a1a1a;
  border-radius: 1rem;
  padding: 0.5rem;
`;

const LogoTitle = styled.h2`
  font-weight: 700;
  font-size: 1rem;
  color: #efefef;
`;

const MenuItem = styled.div`
  font-size: 0.7rem;
`;


const MenuButton = styled.button`
  font-size: 0.7rem;
`;

function Menu() {
  return (
    <RowContainer justify='flex-start'>
      <RowContainer>
        <a href="https://apps.apple.com/us/app/crypto-stand/id1608452177?itsct=apps_box_badge&amp;itscg=30200" >
          <Logo src={LogoImage}></Logo>
        </a>
         <LogoTitle>Crypto Stand</LogoTitle>
      </RowContainer>
      <RowContainer justify='flex-end'>
      <a href="mailto:adam@rdconcepts.design" >
        <MenuItem>Contact</MenuItem>
      </a>

      <a href="https://apps.apple.com/us/app/crypto-stand/id1608452177?itsct=apps_box_badge&amp;itscg=30200" >
        <MenuButton >Download</MenuButton>
      </a>

      </RowContainer>
       
    </RowContainer>
   
  )
}

export default Menu;