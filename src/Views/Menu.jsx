import styled from "@emotion/styled";
import { RowContainer } from "../Components/Layouts";

const MenuItem = styled.div`

`;

function Menu() {
  return (
    <RowContainer>
      <div>
        <MenuItem>Logo</MenuItem>
      </div>
      <RowContainer>
        <MenuItem>Contact</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <button>Download</button>
      </RowContainer>
       
    </RowContainer>
   
  )
}

export default Menu;