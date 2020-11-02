import React, { useRef, useCallback } from 'react'
import {Link} from "react-router-dom"
import { Container, Content, Icon } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';



function Screen1 (){

  return(
    <>
      <Container>
          <Icon>
            <Link to="/">
              <FiArrowLeft />
            </Link>
          </Icon>
        <Content>
          <h1>Sinder</h1>
          <h2>Email:</h2>
          <input type="email" />
          <h2>Senha:</h2>
          <input type="password" />
          <Link to="/navegar">Logar</Link>
        </Content>
      </Container>
    </> 
  )
}
export default Screen1;