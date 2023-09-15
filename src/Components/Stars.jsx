import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.66rem;
  margin: 0;
`;

const SingleStar = styled.span`
  color: #ffd23f;
  font-size: 2rem;
  margin: 0;
`;

function Stars() {
  return (
    <Container>
      <SingleStar className="fa fa-star fa-xl checked"></SingleStar>
      <SingleStar className="fa fa-star checked"></SingleStar>
      <SingleStar className="fa fa-star checked"></SingleStar>
      <SingleStar className="fa fa-star checked"></SingleStar>
      <SingleStar className="fa fa-star checked"></SingleStar>
    </Container>
  )
}

export default Stars;