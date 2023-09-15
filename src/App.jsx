import './App.css'
import { Container, RowContainer, ColumnContainer } from '../src/Components/Layouts'
import styled from '@emotion/styled'
import AppImage from '../src/assets/screenshot.png'
import Menu from './Views/Menu'

function App() {

  return (
    <Container>
      <Menu />
      <RowContainer background='green'>
        <ColumnContainer>
          <h2>Hello</h2>
          <p>This is the first part</p>
          <button>App store</button>
          <button>Contact</button>
        </ColumnContainer>
        <ColumnContainer background='#333'>
          <h2>Hello</h2>
          <p>This is the second part</p>
        </ColumnContainer>
      </RowContainer>
      
      <RowContainer>
      <RowContainer>
        <h2>Hello</h2>
      </RowContainer>
      </RowContainer>
     

    </Container>
  )
}

export default App
