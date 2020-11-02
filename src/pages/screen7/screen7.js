import React from 'react'
import {Link} from "react-router-dom"
import { Container, Content } from './styles';

function Screen7 (){
  return(
  <> 
    <Container>
      <Content>
        <h1 className= "h1"> Sinder </h1>
        <h2>Cadastro Realizado com </h2> 
        <h2>Sucesso!</h2>
        <Link to="/">
          Tela inicial
        </Link>
      </Content>
    </Container>
  </>
  )
}
export default Screen7;