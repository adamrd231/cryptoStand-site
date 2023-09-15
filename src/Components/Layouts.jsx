import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  min-height: 100vh;
  width: 100%;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${ props => props.background ? props.background : 'transparent' };
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${ props => props.background ? props.background : 'transparent' };
`;

export { Container,  RowContainer, ColumnContainer };
