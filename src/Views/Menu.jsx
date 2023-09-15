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

`;

function Menu() {
  return (
    <RowContainer>
      <RowContainer justify='flex-start'>
         <Logo src={LogoImage}></Logo>
         <LogoTitle>Crypto Stand</LogoTitle>
      </RowContainer>
      <RowContainer>
        <MenuItem>Contact</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <button>Download</button>
      </RowContainer>
       
    </RowContainer>
   
  )
}

export default Menu;