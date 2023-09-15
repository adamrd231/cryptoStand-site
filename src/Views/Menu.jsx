import styled from "@emotion/styled";
import { RowContainer } from "../Components/Layouts";
import LogoImage from '../assets/CryptoLogo.png'

const Logo = styled.img`
  height: 3rem;
  width: 3rem;
  background: #333;
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
         <Logo src={LogoImage}></Logo>
         <LogoTitle>Crypto Stand</LogoTitle>
      </RowContainer>
      <RowContainer justify='flex-end'>
        <MenuItem>Contact</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuButton>Download</MenuButton>
      </RowContainer>
       
    </RowContainer>
   
  )
}

export default Menu;