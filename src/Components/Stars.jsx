import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function Stars() {
  return (
    <Container>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
    </Container>
  )
}

export default Stars;