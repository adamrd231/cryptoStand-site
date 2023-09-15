import styled from '@emotion/styled'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  height: auto;
  width: 100%;
  box-sizing: border-box;

`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${ props => props.justify ? props.justify : 'flex-start' };
  align-items: ${ props => props.align ? props.align : 'center' };;
  width: 100%;
  background: ${ props => props.background ? props.background : 'transparent' };
  gap: 1rem;
  padding: ${ props => props.padding ? props.padding : '1rem' };
  box-sizing: border-box;
  color: ${ props => props.color ? props.color : 'white' };
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${ props => props.background ? props.background : 'transparent' };
  padding: 1rem;
`;

export { Container,  RowContainer, ColumnContainer };
