import './App.css'
import { Container, RowContainer, ColumnContainer } from '../src/Components/Layouts'
import styled from '@emotion/styled'
import AppImage from '../src/assets/screenshot.png'


function App() {

  return (
    <Container>
      <RowContainer background='green'>
        
        <h2>Hello</h2>
      </RowContainer>
      
      <RowContainer>
        <h2>Hello</h2>
      </RowContainer>

    </Container>
  )
}

export default App
