import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.66rem;
`;

const SingleStar = styled.span`
  color: #ffd23f;
`;

function Stars() {
  return (
    <Container>
      <SingleStar className="fa fa-star checked"></SingleStar>
      <SingleStar className="fa fa-star checked"></SingleStar>
      <SingleStar className="fa fa-star checked"></SingleStar>
      <SingleStar className="fa fa-star checked"></SingleStar>
      <SingleStar className="fa fa-star checked"></SingleStar>
    </Container>
  )
}

export default Stars;