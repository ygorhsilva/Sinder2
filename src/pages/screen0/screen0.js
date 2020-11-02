import React from 'react'
import {Link} from "react-router-dom"
import "./styles.js"
import { Container, Content } from './styles';


function Screen0 (){
  return(
  <> 
    <Container>
      <Content>
        <h1>Sinder</h1>
        <Link to="/login">Login</Link>
        <Link to="/cadastrar">Cadastrar</Link>
      </Content>
    </Container>
  </>
  )
}
export default Screen0;