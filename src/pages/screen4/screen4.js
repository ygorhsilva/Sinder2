import React from 'react'
import {Link} from "react-router-dom"
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Icon } from './styles.js'; 

function Screen4 (){
  return(
  <> 
    <Container>
      <Icon>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </Icon>
      <Content>
        <h1 > Sinder </h1>
        <h2> O que você é? </h2>
        <Link to="/cadastrarusuario">
          Usuário
        </Link>
        <Link to="/cadastrarprestador">
          Prestador de serviços
        </Link>
      </Content>
    </Container>
  </>
  )
}

export default Screen4;